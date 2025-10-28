import React from "react";
import FamilyTree from "./FamilyTree";
import { familyData } from "./data";

function App() {
  return <FamilyTree initialData={familyData} />;
}

export default App;
