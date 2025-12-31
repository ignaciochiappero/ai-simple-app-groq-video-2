// import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText } from "ai";
import { groq } from "@ai-sdk/groq";
import "dotenv/config";

async function main() {
  const mensajito = await streamText({
    model: groq("openai/gpt-oss-120b"),
    prompt:
      "Decirme el nombre del modelo que estamos consumiendo en este momento",
  });

  for await (const respuestaStreaming of mensajito.textStream) {
    process.stdout.write(respuestaStreaming);
  }
}

main();

// pnpm init
// pnpm add -D @types/node tsx typescript
// pnpm add --save groq-sdk
// pnpm add ai  @ai-sdk/groq dotenv
// npx tsx nombre-de-tu-archivo.ts
