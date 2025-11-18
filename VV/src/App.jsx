import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {

  const users = [
    {
      img: '../src/assets/family_pic1.jpg',
      intro: '',
      color:'royalblue',
      tag: 'Family Trees'
    },
    {
      img: '../src/assets/family_pic2.jpg',
      color:'lightseagreen',
      intro: '',
      tag: 'Pictures'
    },
    {
      img: '../src/assets/family_pic3.jpg',
      color:'orange',
      intro: '',
      tag: 'Find Your Roots'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'pink',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      </div>
  )
}

export default App