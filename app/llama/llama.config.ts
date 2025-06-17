// @/llama/llama.config

import { initLlama, LlamaContext } from "llama.rn";

export const loadModel = async (modelPath: string) => {
  const context = await initLlama({
    model: modelPath,
    use_mlock: true,
    n_ctx: 131072,
    n_gpu_layers: 1, // > 0: enable Metal on iOS
    // embedding: true, // use embedding
  });

  return context;
};
