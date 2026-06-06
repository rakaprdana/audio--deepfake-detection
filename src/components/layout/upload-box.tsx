export function UploadBox() {
  return (
    <div className="upload-box">
      <div className="upload-box-content">
        <h2>Upload your audio file</h2>
        <p>Supported formats: .wav, .mp3, .flac</p>
        <input type="file" accept=".wav,.mp3,.flac" />
      </div>
    </div>
  );
}
