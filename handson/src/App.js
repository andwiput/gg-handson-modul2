import './App.css';
import TitleGif from './components/title'
import ImageGif from './components/imageGif';
import dataGif from './components/data-gif';

function App() {
  return (
    <div className="App">
      <input/>
      <button>Search</button>
      <TitleGif title={dataGif.title}/>
      <ImageGif url={dataGif.url}/>
    </div>
  );
}

export default App;
