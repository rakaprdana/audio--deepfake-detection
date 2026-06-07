import { Button } from "../button";
import { PredictAudio } from "../utils/predict-util";

export function UploadBox() {
  const prediction = PredictAudio();
  return (
    <div className="p-8 rounded-lg flex flex-col items-center gap-8 bg-slate-700">
      <section className="text-white p-24 rounded-lg flex flex-col items-center justify-center bg-slate-800">
        <h2>Upload your audio file 📁</h2>
        <p>Supported formats: .wav, .mp3, .flac, .ogg</p>
        <input
          type="file"
          accept=".wav,.mp3,.flac,.ogg"
          className="mt-4"
          onChange={prediction.handleFileChange}
        />
      </section>
      <Button label="Predict" onClick={prediction.handlePredict} />
      {prediction.result &&
        prediction.result.map((item, index) => (
          <p key={index} className="text-white text-xl">
            {item}
          </p>
        ))}
    </div>
  );
}
