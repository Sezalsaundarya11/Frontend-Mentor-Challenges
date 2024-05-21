import Card from './Card.jsx'
import './App.css';
import image from './assets/image-victor.jpg'

function App() {
  return (
      <div className = 'app-container'>
        <Card image={image} name="Victor Crest" age={26} place="London" followers = '80K' likes='803K' photos = '1.4K' />
      </div>

      
    
  );
}

export default App;
