import { promptTemplates } from "@/src/data/promptTemplates";

export function getPromptTemplates() {
  return promptTemplates;
}

export function getPromptTemplateById(id: string) {
  return promptTemplates.find((template) => template.id === id);
}

export function getPromptTemplateBySlug(slug: string) {
  return promptTemplates.find((template) => template.slug === slug);
}
