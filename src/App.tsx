import { UploadBox } from "./components/layout/upload-box";

function App() {
  return (
    <div className="border-2 border-red-500 px-4 flex items-center justify-center min-h-screen gap-16 bg-linear-to-r from-cyan-500 to-blue-500">
      <section className="border-4 border-green-500  text-white">
        <h1 className="text-7xl font-bold pb-4">Audio Deepfake Detection🎙️</h1>
        <p>Upload an audio file to check if it's a deepfake.</p>
      </section>
      <UploadBox />
    </div>
  );
}

export default App;
