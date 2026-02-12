
import { GoogleGenAI } from "@google/genai";
import { EVENT_DAYS, IMPORTANT_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userPrompt: string) => {
  const systemInstruction = `
    Você é o Assistente Virtual do ENATIH 2026 - 1° Congresso de Medicina Personalizada. 
    Seu objetivo é ajudar os participantes com informações sobre a programação e logística no Sol Grand Premium em Sauípe.
    Dados do Evento:
    - Nome: ENATIH 2026 / 1° Congresso de Medicina Personalizada
    - Local: Sol Grand Premium, Sauípe (BA)
    - Datas: 11/03 a 15/03 (Quarta a Domingo).
    - Programação: ${JSON.stringify(EVENT_DAYS)}
    - Informações Importantes: ${JSON.stringify(IMPORTANT_INFO)}
    
    Regras:
    1. Seja cordial e entusiasmado, use um tom profissional e acolhedor (estilo concierge premium).
    2. Responda em Português do Brasil.
    3. Se não souber algo, peça para o usuário procurar o Help Desk na Recepção (Ponto 1 do mapa).
    4. Mantenha as respostas concisas e formate com bullet points se necessário.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, não consegui processar sua pergunta agora. Tente novamente em instantes.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Ocorreu um erro ao consultar o assistente. Por favor, verifique sua conexão.";
  }
};
