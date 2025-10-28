import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./FamilyTree.css";

const STORAGE_KEY = "familyTreeData";

const FamilyTree = ({ initialData }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  const [selectedNode, setSelectedNode] = useState(null);
  const [newMember, setNewMember] = useState({ name: "", image: "" });
  const [editingName, setEditingName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (!data) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .call(
        d3.zoom().on("zoom", (event) => {
          g.attr("transform", event.transform);
        })
      );

    const g = svg.append("g");
    const treeLayout = d3.tree().size([height, width - 200]);

    const root = d3.hierarchy(data, (d) => (d._children ? null : d.children));
    treeLayout(root);

    // Draw links
    g.selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal().x((d) => d.y).y((d) => d.x));

    // Draw nodes
    const node = g
      .selectAll(".node")
      .data(root.descendants())
      .join("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.y},${d.x})`)
      .on("click", (_, d) => handleSelectNode(d));

    const nodeSize = 60;

    node
      .append("image")
      .attr("xlink:href", (d) => d.data.image)
      .attr("x", -nodeSize / 2)
      .attr("y", -nodeSize / 2)
      .attr("width", nodeSize)
      .attr("height", nodeSize)
      .attr("clip-path", "circle(30px)")
      .style("cursor", "pointer");

    node
      .append("text")
      .attr("dy", 45)
      .attr("text-anchor", "middle")
      .text((d) => d.data.name)
      .style("font-size", "14px")
      .style("fill", "#333");

    function handleSelectNode(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }

      setSelectedNode(d.data);
      setIsEditing(false);
      setData({ ...data });
    }
  }, [data]);

  // Helper: recursive operations
  const findAndModify = (node, targetName, callback) => {
    if (node.name === targetName) callback(node);
    if (node.children) node.children.forEach((child) => findAndModify(child, targetName, callback));
  };

  // Add member
  const handleAddMember = () => {
    if (!selectedNode) return alert("Select a parent first!");
    if (!newMember.name || !newMember.image)
      return alert("Please provide name and image!");

    const updated = { ...data };
    findAndModify(updated, selectedNode.name, (node) => {
      node.children = node.children || [];
      node.children.push({ ...newMember });
    });
    setData(updated);
    setNewMember({ name: "", image: "" });
  };

  // Delete member
  const handleDeleteMember = () => {
    if (!selectedNode) return alert("Select a member to delete!");
    if (selectedNode.name === data.name)
      return alert("You can’t delete the root member!");

    const deleteRecursively = (node, nameToDelete) => {
      if (!node.children) return;
      node.children = node.children.filter((child) => child.name !== nameToDelete);
      node.children.forEach((child) => deleteRecursively(child, nameToDelete));
    };

    const updated = { ...data };
    deleteRecursively(updated, selectedNode.name);
    setData(updated);
    setSelectedNode(null);
  };

  // Rename member
  const handleRenameMember = () => {
    if (!selectedNode) return alert("Select a member to rename!");
    if (!editingName.trim()) return alert("Enter a valid new name.");

    const updated = { ...data };
    findAndModify(updated, selectedNode.name, (node) => (node.name = editingName));
    setData(updated);
    setSelectedNode({ ...selectedNode, name: editingName });
    setEditingName("");
    setIsEditing(false);
  };

  // Image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (upload) => {
      setNewMember({ ...newMember, image: upload.target.result });
    };
    reader.readAsDataURL(file);
  };

  // Reset everything
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the tree?")) {
      localStorage.removeItem(STORAGE_KEY);
      setData(initialData);
      setSelectedNode(null);
    }
  };

  return (
    <div className="family-wrapper">
      <div className="control-panel">
        <h3>👨‍👩‍👧 Family Tree Editor</h3>

        {selectedNode ? (
          <p>
            Selected: <b>{selectedNode.name}</b>
          </p>
        ) : (
          <p>Select someone to edit.</p>
        )}

        {/* Add Member */}
        <h4>Add Member</h4>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {newMember.image && (
          <img
            src={newMember.image}
            alt="preview"
            style={{ width: 60, borderRadius: "50%" }}
          />
        )}
        <button onClick={handleAddMember}>Add Member</button>

        {/* Edit Member */}
        {selectedNode && (
          <>
            <h4>Edit Member</h4>
            {isEditing ? (
              <>
                <input
                  type="text"
                  placeholder="New name"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                />
                <button onClick={handleRenameMember}>Save Name</button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)}>Rename</button>
            )}
            <button
              onClick={handleDeleteMember}
              style={{ backgroundColor: "#e53935" }}
            >
              Delete
            </button>
          </>
        )}

        <hr />
        <button onClick={handleReset} style={{ backgroundColor: "#777" }}>
          Reset Tree
        </button>
      </div>

      <div ref={wrapperRef} className="tree-container">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default FamilyTree;
