"use client";

import { useMemo, useState } from "react";

const models = ["GPT Image 2", "Nano Banana", "Gemini 9"];
const styles = ["深色科技", "简洁编辑", "课堂讲义"];
const languages = ["简体中文", "English", "日本語"];

type Mode = "upload" | "prompt";

export function InteractiveGenerator() {
  const [mode, setMode] = useState<Mode>("upload");
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [prompt, setPrompt] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultMessage, setResultMessage] = useState("上传文档或输入描述后，可立即生成可视卡片。");

  const canGenerate = useMemo(() => {
    return Boolean(selectedFile || prompt.trim());
  }, [prompt, selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    if (file) {
      setMode("upload");
      setResultMessage(`已选择文件：${file.name}`);
    }
  };

  const handleGenerate = async () => {
    if (!canGenerate) {
      setResultMessage("请先上传文件或输入主题描述。");
      return;
    }

    setIsGenerating(true);
    setResultMessage("正在生成预览卡片与知识图谱...");

    await new Promise((resolve) => setTimeout(resolve, 900));

    const sourceLabel = selectedFile ? `文件《${selectedFile.name}》` : "当前主题描述";
    setResultMessage(
      `已基于${sourceLabel}，使用 ${selectedModel}、${selectedStyle}、${selectedLanguage} 生成预览方案。`
    );
    setIsGenerating(false);
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

      <div className="panel-body mt-3 rounded-[22px] border border-[rgba(52,221,255,0.28)] bg-[rgba(7,15,26,0.88)] p-3 shadow-[0_0_0_1px_rgba(57,237,255,0.08),0_0_26px_rgba(44,208,255,0.1)]">
        <div className="hero-form-grid">
          <label className={`upload-zone upload-zone-compact ${mode === "upload" ? "active-zone" : ""}`} htmlFor="landing-upload">
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

          <textarea
            className={`prompt-input prompt-input-compact ${mode === "prompt" ? "active-zone" : ""}`}
            rows={4}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="请输入你想生成的主题内容或描述。例如：“量子计算的3张简洁明亮的可视卡片”"
          />
        </div>

        <div className="mt-2.5">
          <div className="controls-grid controls-grid-four">
            <div>
              <div className="control-caption">选择模型</div>
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
              className="select-like text-left"
              type="button"
              onClick={() =>
                setSelectedStyle((current) => styles[(styles.indexOf(current) + 1) % styles.length])
              }
            >
              <span className="select-label">卡片风格</span>
              <span className="select-value">{selectedStyle}</span>
            </button>

            <button
              className="select-like text-left"
              type="button"
              onClick={() =>
                setSelectedLanguage(
                  (current) => languages[(languages.indexOf(current) + 1) % languages.length]
                )
              }
            >
              <span className="select-label">输出语言</span>
              <span className="select-value">{selectedLanguage}</span>
            </button>

            <button
              className="generate-button"
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? "生成中..." : "生成可视卡片知识图谱"}
            </button>
          </div>

          <div className="result-banner mt-3">{resultMessage}</div>
        </div>
      </div>
    </div>
  );
}
