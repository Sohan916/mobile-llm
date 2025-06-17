import * as FileSystem from "expo-file-system";

const downloadLink =
  "https://huggingface.co/unsloth/DeepSeek-R1-Distill-Qwen-1.5B-GGUF/resolve/main/DeepSeek-R1-Distill-Qwen-1.5B-Q5_K_M.gguf";

const downloadResumable = FileSystem.createDownloadResumable(
  downloadLink,
  FileSystem.documentDirectory + "model.gguf",
  {},
  (progress) => {
    console.log("downloading", progress);
  }
);

const downloadModel = async () => {
  try {
    const res = await downloadResumable.downloadAsync();
    return res;
  } catch (e) {
    return null;
  }
};
