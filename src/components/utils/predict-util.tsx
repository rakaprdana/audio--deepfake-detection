import { useState } from "react";
import { ApiModel } from "../api/api-model";

export const PredictAudio = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | any>(null);
  const apiModel = new ApiModel();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handlePredict = async () => {
    if (!file) return;
    const prediction = await apiModel.handlePrediction(file);
    setResult(prediction);
  };

  return { handleFileChange, handlePredict, result };
};
