import axios from "axios";

export const askAI = async (message) => {
    try {
        if (!message) {
            throw new Error("Message is empty");
        }

        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4o-mini",
                messages: message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content) {
            throw new Error("AI returned empty response");
        }

        return content;

    } catch (error) {
        console.error("AI Error:", error?.response?.data || error.message);
        throw error; 
    }
};