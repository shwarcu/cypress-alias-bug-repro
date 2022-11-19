import ReactPlayer from 'react-player';
import './App.css';
import { DEFAULT_VIDEO_URL } from './constants';

function App() {
  return (
    <div className="App">
      <ReactPlayer controls={true} muted={true} playing={true} url={DEFAULT_VIDEO_URL} />
    </div>
  );
}

export default App;
