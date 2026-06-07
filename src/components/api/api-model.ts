import { Client } from "@gradio/client";

export class ApiModel {
  private client: Client | undefined;

  async connect() {
    if (!this.client) {
      const apiURL = import.meta.env.VITE_API_MODEL;
      this.client = await Client.connect(apiURL);
    }
  }
  async handlePrediction(file: File) {
    await this.connect();
    if (!this.client) {
      throw new Error("Client not connected yet");
    }
    const resp = await this.client.predict("/predict", [file]);
    return resp.data;
  }
}
