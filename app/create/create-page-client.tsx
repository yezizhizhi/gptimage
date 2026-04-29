"use client";

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

  useEffect(() => {
    if (selectedTemplate) {
      setPrompt(selectedTemplate.fullPrompt);
    }
  }, [selectedTemplate]);

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
        placeholder="在这里编辑你的完整 Prompt..."
      />

      <div className="create-page-actions">
        <button
          type="button"
          className="prompt-card-primary"
          onClick={() => console.log(prompt)}
        >
          Generate Image
        </button>
      </div>
    </section>
  );
}
