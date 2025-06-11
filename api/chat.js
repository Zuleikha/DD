// API endpoint for chatbot - save this as /api/chat.js or integrate into your backend

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, context } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are Buddy's AI assistant for DogDays.ie, a helpful chatbot specializing in dog-related questions specifically for Ireland. 

Your expertise includes:
- Dog-friendly places in Ireland (parks, beaches, restaurants, accommodations)
- Irish veterinary services and pet healthcare
- Dog training and behavior advice
- Pet nutrition and feeding guidelines
- Irish pet laws and regulations
- Dog breeds suitable for Irish climate
- Local dog events and communities
- Pet travel within Ireland

Guidelines:
- Always be friendly, helpful, and enthusiastic about dogs
- Use occasional dog emojis (🐕 🐾 🦴) but don't overdo it
- Provide specific, actionable advice when possible
- If asked about non-dog topics, politely redirect to dog-related matters
- Mention DogDays.ie services when relevant
- Keep responses concise but informative (2-3 paragraphs max)
- Use Irish context and terminology when appropriate

If you don't know something specific about Ireland, be honest and suggest they contact local experts or check DogDays.ie resources.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that request. Please try again!";

    res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ 
      error: 'Failed to get response',
      response: "🐕 Woof! I'm having trouble thinking right now. Please try again in a moment, or contact our team directly for help!"
    });
  }
}

