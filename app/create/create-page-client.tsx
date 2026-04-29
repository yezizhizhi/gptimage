"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getPromptTemplateById } from "@/src/lib/getPromptTemplates";

export default function CreatePageClient() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");

  const selectedTemplate = useMemo(() => {
    return templateId ? getPromptTemplateById(templateId) : undefined;
  }, [templateId]);

  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedTemplate) {
      setPrompt(selectedTemplate.fullPrompt);
    }
  }, [selectedTemplate]);

  async function handleGenerate() {
    if (!prompt.trim()) {
      setError("请输入 Prompt 后再生成。");
      return;
    }

    setIsGenerating(true);
    setError(null);
    setStatusMessage("正在生成图片，请稍候...");
    setGeneratedImage(null);

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

      const data = (await response.json()) as {
        error?: string;
        message?: string;
        imageUrl?: string;
        url?: string;
        image?: string;
        imageBase64?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || data.message || "生成失败，请稍后重试。");
      }

      const imageValue =
        data.imageUrl ||
        data.url ||
        data.image ||
        (data.imageBase64 ? `data:image/png;base64,${data.imageBase64}` : null);

      if (!imageValue) {
        throw new Error("接口没有返回图片地址");
      }

      setGeneratedImage(imageValue);
      setStatusMessage("生成成功，你可以下载或继续调整 Prompt。");
    } catch (err) {
      setError(err instanceof Error ? err.message : "生成失败，请检查 API Key 或稍后重试。");
      setStatusMessage(null);
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleCopyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="create-page-card">
      <p className="create-page-eyebrow">Template-based Creation</p>
      <h1 className="create-page-title">Create Infographic</h1>

      {selectedTemplate ? (
        <p className="create-page-subtitle">正在使用模板：{selectedTemplate.title}</p>
      ) : (
        <p className="create-page-subtitle">未选择模板，你也可以直接输入自己的 Prompt。</p>
      )}

      <textarea
        className="create-page-textarea"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        placeholder="请输入你想生成的信息图 Prompt..."
      />

      {statusMessage ? <p className="create-page-status">{statusMessage}</p> : null}
      {error ? <p className="create-page-error">{error}</p> : null}

      <div className="create-page-actions">
        <button
          type="button"
          className="prompt-card-primary"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate Image"}
        </button>
      </div>

      {generatedImage ? (
        <div className="create-result-panel">
          <div className="create-result-preview">
            <Image
              src={generatedImage}
              alt="Generated infographic"
              width={1024}
              height={1024}
              unoptimized
              className="create-result-image"
            />
          </div>

          <div className="create-result-actions">
            <a
              className="prompt-card-primary create-result-download"
              href={generatedImage}
              download={`${selectedTemplate?.slug ?? "generated-infographic"}.png`}
            >
              下载图片
            </a>
            <button type="button" className="prompt-card-link" onClick={handleGenerate}>
              重新生成
            </button>
            <button type="button" className="prompt-card-link" onClick={handleCopyPrompt}>
              {copied ? "Prompt 已复制" : "复制当前 Prompt"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
