import { GoogleGenAI } from "@google/genai";
import { UI_ASSISTANT_INSTRUCTION } from '../constants';

let chatSession: any = null;
let genAI: GoogleGenAI | null = null;

export const initializeGemini = (): boolean => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables.");
    return false;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey });
    return true;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return false;
  }
};

export const getChatSession = (): any => {
  if (!genAI) {
    const success = initializeGemini();
    if (!success || !genAI) {
        throw new Error("Gemini AI not initialized. Check API Key.");
    }
  }

  if (!chatSession) {
    // We use the flash-preview model but enable a small thinking budget
    // to allow the AI to "think" about complex user queries regarding the portfolio.
    chatSession = genAI.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: UI_ASSISTANT_INSTRUCTION,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 1024 }, // Enable "Thinking" capabilities
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    const result = await session.sendMessage({ message });
    return result.text || "I'm processing that, but I didn't get a clear text response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "My neural pathways are currently congested. Please retry the transmission.";
  }
};