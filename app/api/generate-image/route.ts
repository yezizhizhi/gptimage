import OpenAI from "openai";
import { NextResponse } from "next/server";

type GenerateImageRequest = {
  prompt?: string;
};

function buildStickerPrompt(subject: string) {
  return `Create a cute sticker-style illustration of ${subject}, centered composition, clean bold outline, white background, expressive and playful style, suitable for social media and printing.`;
}

function createOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
}

// Reserved for future auth, quota, and credits enforcement.
async function validateGenerationAccess() {
  return { allowed: true };
}

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  const access = await validateGenerationAccess();
  if (!access.allowed) {
    return NextResponse.json({ error: "Image generation is not available." }, { status: 403 });
  }

  let body: GenerateImageRequest;

  try {
    body = (await request.json()) as GenerateImageRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON request body." }, { status: 400 });
  }

  const prompt = body.prompt?.trim();
  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  try {
    const openai = createOpenAIClient();
    const result = await openai.images.generate({
      model: "gpt-image-2",
      prompt: buildStickerPrompt(prompt),
      size: "1024x1024",
      quality: "low"
    });

    const imageBase64 = result.data?.[0]?.b64_json;
    if (!imageBase64) {
      return NextResponse.json({ error: "No image data returned from OpenAI." }, { status: 502 });
    }

    return NextResponse.json({
      imageBase64
    });
  } catch (error) {
    console.error("Image generation failed:", error);

    return NextResponse.json(
      { error: "Failed to generate image. Please try again." },
      { status: 500 }
    );
  }
}
