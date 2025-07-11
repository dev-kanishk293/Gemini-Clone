// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.0-flash-lite';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  // for await (const chunk of response) {
  //   console.log(chunk.text);
  // }
  return response;
}

export default main;
