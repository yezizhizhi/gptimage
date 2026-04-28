"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const models = ["GPT Image 2"];
const stickerThemes = [
  "可爱贴纸",
  "动物角色",
  "美食甜点",
  "表情 emoji",
  "节日庆祝",
  "卡通植物"
] as const;

type Mode = "upload" | "prompt";

export function InteractiveGenerator() {
  const [mode, setMode] = useState<Mode>("prompt");
  const [prompt, setPrompt] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedTheme, setSelectedTheme] = useState<(typeof stickerThemes)[number]>(
    stickerThemes[0]
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("选择一个方向后即可生成图片预览。");
  const [imageDataUrl, setImageDataUrl] = useState("");

  const canGenerate = useMemo(() => {
    if (mode === "upload") {
      return Boolean(selectedFile);
    }

    return Boolean(prompt.trim());
  }, [mode, prompt, selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);

    if (file) {
      setResultMessage(`已选择文件：${file.name}。点击 Generate 可生成贴纸风格预览。`);
      setErrorMessage("");
    }
  };

  const handleGenerate = async () => {
    if (!canGenerate) {
      setErrorMessage(mode === "upload" ? "请先上传文档。" : "请先输入你想生成的主题。");
      return;
    }

    setIsGenerating(true);
    setErrorMessage("");
    setImageDataUrl("");

    const userPrompt =
      mode === "upload"
        ? `${selectedTheme}，根据文档主题生成贴纸风格插画，参考文件：${selectedFile?.name ?? ""}`
        : `${selectedTheme}，${prompt.trim()}`;

    setResultMessage("正在生成图片...");

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: userPrompt
        })
      });

      const payload = (await response.json()) as { error?: string; imageBase64?: string };

      if (!response.ok || !payload.imageBase64) {
        throw new Error(payload.error || "Failed to generate image.");
      }

      setImageDataUrl(`data:image/png;base64,${payload.imageBase64}`);
      setResultMessage("图片已生成，默认参数为 1024x1024，quality: low。");
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
      <div className="tab-row tab-row-match">
        <button
          className={`panel-tab ${mode === "upload" ? "panel-tab-active" : ""}`}
          type="button"
          onClick={() => setMode("upload")}
        >
          上传文档
        </button>
        <button
          className={`panel-tab ${mode === "prompt" ? "panel-tab-active" : ""}`}
          type="button"
          onClick={() => setMode("prompt")}
        >
          输入主题描述
        </button>
      </div>

      <div className="panel-body rounded-[22px] border border-[rgba(52,221,255,0.28)] bg-[rgba(7,15,26,0.88)] p-4 shadow-[0_0_0_1px_rgba(57,237,255,0.08),0_0_26px_rgba(44,208,255,0.1)]">
        <div className="hero-form-grid">
          <label
            className={`upload-zone upload-zone-compact ${mode === "upload" ? "active-zone" : ""}`}
            htmlFor="landing-upload"
          >
            <input
              id="landing-upload"
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
              onChange={handleFileChange}
            />
            <span className="upload-icon">⤴</span>
            <span className="upload-title">
              {selectedFile ? `已选择：${selectedFile.name}` : "拖拽文件到此处，或点击上传"}
            </span>
            <span className="upload-copy">支持 PDF、DOCX、PPTX、TXT（最大 50MB）</span>
          </label>

          <div className="space-y-3">
            <div className="control-caption mb-0">贴纸主题</div>
            <select
              className={`select-like select-field ${mode === "prompt" ? "active-zone" : ""}`}
              value={selectedTheme}
              onChange={(event) =>
                setSelectedTheme(event.target.value as (typeof stickerThemes)[number])
              }
            >
              {stickerThemes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
            <textarea
              className={`prompt-input min-h-[120px] resize-none ${mode === "prompt" ? "active-zone" : ""}`}
              rows={4}
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="例如：一只戴宇航员头盔的柯基、抹茶蛋糕、开心的小番茄"
            />
          </div>
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
                下载图片
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
