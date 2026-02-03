import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  if (!process.env.REPLICATE_API_TOKEN) {
    return NextResponse.json(
      { error: "REPLICATE_API_TOKEN is not configured" },
      { status: 500 }
    );
  }

  try {
    const { image, prompt } = await request.json();

    // Using SDXL for high-quality Image-to-Image generation
    // prompt_strength (0-1): How much to respect the prompt vs the original image.
    // 0.3 means keep 70% of original structure, 30% AI hallucination (cleaning).
    // We want to keep the house structure but "clean" the surfaces.
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          image: image, // The user's uploaded image path/URL
          prompt: prompt + ", 8k resolution, photorealistic, architectural photography, highly detailed, professional, cinematic lighting",
          negative_prompt: "blurry, low quality, distorted, ugly, pixelated, cartoon, illustration, watermark, text",
          prompt_strength: 0.55, // Tuning this is key. Too high = completely new house. Too low = just the old dirty photo.
          num_outputs: 1,
        },
      }
    );

    // Replicate returns an array of output URLs
    return NextResponse.json({ output: output });
  } catch (error) {
    console.error("AI Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}
