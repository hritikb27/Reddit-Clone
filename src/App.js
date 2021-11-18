import './style.scss'
import Nav from './components.js/Nav';
import Posts from './components.js/Posts';
import AddNewPost from './components.js/AddNewPost';

function App() {
  return (
    <div className="App">
      <Nav />
      <AddNewPost />
      <Posts />
    </div>
  );
}

export default App;
