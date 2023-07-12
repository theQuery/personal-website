import '../styles/App.css';
import Navbar from './Navbar';
import Content from './Content';

//! Things to put in portfolio:
//* Big:
// Chatpex
// Sambabe
// Rick & Morty
//* Medium:
// Personal Website (this)
// datecord
// Custom-Discord?
// Roblox Game?
// Blender Donut
//* Small:
// Rock Paper Scissors
// React Exercise
// AHK Scripts
// graph.js (JavaScript)

//! About Me:
// Say how and why you got TMK Media AS started.
// Say your dream is to own a yacht
// Say you like the rain (when inside)
// That both things above inspired the page.
// Write about your experience with setting up things on AWS (so they know you can)

function App() {
  return <div className='app'>
    <Navbar />
    <Content />
  </div>
}

export default App;