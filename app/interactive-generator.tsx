"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const models = ["GPT Image 2"];

export function InteractiveGenerator() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("输入贴纸主题后，即可生成贴纸预览。");
  const [imageDataUrl, setImageDataUrl] = useState("");

  const canGenerate = useMemo(() => Boolean(prompt.trim()), [prompt]);

  const handleGenerate = async () => {
    if (!canGenerate) {
      setErrorMessage("请先输入你想生成的贴纸主题。");
      return;
    }

    setIsGenerating(true);
    setErrorMessage("");
    setImageDataUrl("");
    setResultMessage("正在生成贴纸...");

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt
        })
      });

      const payload = (await response.json()) as { error?: string; imageBase64?: string };

      if (!response.ok || !payload.imageBase64) {
        throw new Error(payload.error || "Failed to generate image.");
      }

      setImageDataUrl(`data:image/png;base64,${payload.imageBase64}`);
      setResultMessage("贴纸已生成，默认参数为 1024x1024，quality: low。");
    } catch (error) {
      const message = error instanceof Error ? error.message : "生成失败，请稍后重试。";
      setErrorMessage(message);
      setResultMessage("这次生成没有完成。");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div id="generate" className="generator-panel generator-panel-match mx-auto mt-3 max-w-[980px]">
      <div className="panel-body rounded-[22px] border border-[rgba(52,221,255,0.28)] bg-[rgba(7,15,26,0.88)] p-4 shadow-[0_0_0_1px_rgba(57,237,255,0.08),0_0_26px_rgba(44,208,255,0.1)]">
        <div className="space-y-3">
          <div className="control-caption mb-0">贴纸主题</div>
          <textarea
            className="prompt-input min-h-[120px] resize-none"
            rows={4}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="例如：一只戴宇航员头盔的柯基、抹茶蛋糕、开心的小番茄"
          />
        </div>

        <div className="mt-4 controls-grid controls-grid-sticker">
          <div>
            <div className="control-caption">模型</div>
            <div className="model-row model-row-tight">
              {models.map((model) => (
                <button
                  key={model}
                  className={`model-chip ${selectedModel === model ? "model-chip-active" : ""}`}
                  type="button"
                  onClick={() => setSelectedModel(model)}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <button
            className="generate-button sticker-generate-button"
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="result-banner mt-3">{resultMessage}</div>
        {errorMessage ? <div className="error-banner mt-3">{errorMessage}</div> : null}

        {imageDataUrl ? (
          <div className="image-preview-card mt-4">
            <Image
              src={imageDataUrl}
              alt="Generated sticker preview"
              width={1024}
              height={1024}
              className="generated-image"
              unoptimized
            />

            <div className="mt-4 flex justify-end">
              <a
                href={imageDataUrl}
                download="gpt-image-2-sticker.png"
                className="download-button"
              >
                下载贴纸
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
