"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const topics = ["科技与未来", "教育科普", "商业展示", "节日活动", "品牌海报"];
const languages = ["简体中文", "English", "日本語"];

type Mode = "upload" | "prompt";

export function GeneratorPanel() {
  const [mode, setMode] = useState<Mode>("prompt");
  const [prompt, setPrompt] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [language, setLanguage] = useState(languages[0]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultMessage, setResultMessage] = useState("输入主题内容后即可开始生成。");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");

  const promptLength = prompt.length;
  const canGenerate = useMemo(() => {
    if (mode === "upload") return Boolean(selectedFile);
    return Boolean(prompt.trim());
  }, [mode, prompt, selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setErrorMessage("");

    if (file) {
      setResultMessage(`已选择文件：${file.name}`);
    }
  };

  const handleGenerate = async () => {
    if (!canGenerate) {
      setErrorMessage(mode === "upload" ? "请先上传文档。" : "请先输入主题描述。");
      return;
    }

    const payloadPrompt =
      mode === "upload"
        ? `${topic}，根据文档内容生成可视卡片风格图像，参考文件：${selectedFile?.name ?? ""}，输出语言：${language}`
        : `${topic}，${prompt.trim()}，输出语言：${language}`;

    setIsGenerating(true);
    setErrorMessage("");
    setImageDataUrl("");
    setResultMessage("正在生成中，请稍候...");

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: payloadPrompt })
      });

      const payload = (await response.json()) as { error?: string; imageBase64?: string };

      if (!response.ok || !payload.imageBase64) {
        throw new Error(payload.error || "生成失败，请稍后重试。");
      }

      setImageDataUrl(`data:image/png;base64,${payload.imageBase64}`);
      setResultMessage("生成完成，你可以直接预览或下载结果。");
    } catch (error) {
      const message = error instanceof Error ? error.message : "生成失败，请稍后重试。";
      setErrorMessage(message);
      setResultMessage("本次生成未完成。");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="generator-glass-panel" aria-label="生成器">
      <div className="generator-tabs">
        <button
          type="button"
          className={`generator-tab ${mode === "upload" ? "generator-tab-active" : ""}`}
          onClick={() => setMode("upload")}
        >
          上传文档
        </button>
        <button
          type="button"
          className={`generator-tab ${mode === "prompt" ? "generator-tab-active" : ""}`}
          onClick={() => setMode("prompt")}
        >
          输入主题描述
        </button>
      </div>

      <div className="generator-body">
        {mode === "upload" ? (
          <label className="generator-upload-zone" htmlFor="generator-upload">
            <input
              id="generator-upload"
              className="sr-only"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
            />
            <span className="generator-upload-icon">⤴</span>
            <span className="generator-upload-title">
              {selectedFile ? `已选择：${selectedFile.name}` : "拖拽文件到此处，或点击上传"}
            </span>
            <span className="generator-upload-copy">支持 PDF / DOCX / TXT</span>
          </label>
        ) : (
          <>
            <label className="generator-label sr-only" htmlFor="topic-input">
              输入主题描述
            </label>
            <div className="generator-textarea-wrap">
              <textarea
                id="topic-input"
                className="generator-textarea"
                rows={5}
                value={prompt}
                onChange={(event) => setPrompt(event.target.value.slice(0, 200))}
                placeholder={"输入你想生成的主题内容或描述，例如：\n“量子计算的发展历程与关键技术”"}
              />
              <span className="generator-counter">{promptLength}/200</span>
            </div>
          </>
        )}

        <div className="generator-controls">
          <div className="generator-select-group">
            <span className="generator-field-label">粘贴主题</span>
            <select className="generator-select" value={topic} onChange={(e) => setTopic(e.target.value)}>
              {topics.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="generator-select-group">
            <span className="generator-field-label">输出语言</span>
            <select
              className="generator-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="generator-submit"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? "生成中..." : "生成可视卡片与知识图谱 ⚡"}
          </button>
        </div>

        <div className="generator-feedback-row">
          <div className="generator-result-banner">{resultMessage}</div>
          {errorMessage ? <div className="generator-error-banner">{errorMessage}</div> : null}
        </div>

        {imageDataUrl ? (
          <div className="generator-preview-card">
            <Image
              src={imageDataUrl}
              alt="生成结果预览"
              width={1024}
              height={1024}
              className="generator-preview-image"
              unoptimized
            />
            <div className="generator-preview-actions">
              <a href={imageDataUrl} download="gpt-image-2-result.png" className="generator-download">
                下载结果
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
