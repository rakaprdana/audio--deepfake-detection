import { UploadBox } from "./components/layout/upload-box";

function App() {
  return (
    <div className="app">
      <h1>Audio Deepfake Detection</h1>
      <p>Upload an audio file to check if it's a deepfake.</p>
      <UploadBox />
    </div>
  );
}

export default App;
