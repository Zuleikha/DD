# 🤖 DogDays.ie Chatbot Setup Guide

## 🎯 Overview
Your website now includes **Buddy's AI Assistant** - a GPT-3.5-turbo powered chatbot specifically designed for dog-related questions in Ireland.

## ✨ Features
- **Dog-Focused Expertise**: Specialized in Irish dog services, parks, vets, and advice
- **Smart Responses**: Uses GPT-3.5-turbo for intelligent, contextual answers
- **Irish Context**: Understands local laws, climate, and services
- **Beautiful UI**: Matches your Irish theme with floating chat button
- **Mobile Responsive**: Works perfectly on all devices

## 🚀 Setup Instructions

### 1. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or log in
3. Click "Create new secret key"
4. Copy your API key (starts with `sk-`)

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` and add your API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### 3. Deploy API Endpoint
The chatbot needs a backend API to communicate with OpenAI. You have several options:

#### Option A: Vercel (Recommended)
1. The `api/chat.js` file is ready for Vercel deployment
2. Deploy your project to Vercel
3. Add your `OPENAI_API_KEY` in Vercel environment variables

#### Option B: Netlify Functions
1. Move `api/chat.js` to `netlify/functions/chat.js`
2. Deploy to Netlify
3. Add environment variable in Netlify dashboard

#### Option C: Custom Backend
1. Create your own Express.js or similar backend
2. Use the `api/chat.js` code as reference
3. Update the fetch URL in `DogChatbot.tsx`

## 🎨 Chatbot Features

### What the Chatbot Can Help With:
- **Dog Parks & Walks**: Find the best spots in Ireland
- **Veterinary Services**: Locate trusted vets and emergency care
- **Training Advice**: Professional dog training tips
- **Nutrition Guidance**: Feeding recommendations and local suppliers
- **Irish Pet Laws**: Regulations and requirements
- **Dog-Friendly Places**: Restaurants, hotels, and attractions
- **Breed Advice**: Best dogs for Irish climate
- **Local Events**: Dog shows and community gatherings

### Smart Features:
- **Context Awareness**: Remembers conversation context
- **Irish Expertise**: Specialized knowledge of Ireland
- **Friendly Personality**: Matches your brand voice
- **Error Handling**: Graceful fallbacks if API fails
- **Rate Limiting**: Prevents spam and abuse

## 🎯 User Experience

### How It Works:
1. **Floating Button**: Purple chat icon in bottom-right corner
2. **Click to Open**: Reveals chat window with welcome message
3. **Type Questions**: Users ask dog-related questions
4. **AI Responses**: GPT-3.5-turbo provides expert answers
5. **Conversation Flow**: Natural back-and-forth dialogue

### Example Conversations:
- "Where are the best dog beaches in Dublin?"
- "My puppy won't stop barking, what should I do?"
- "What vaccinations does my dog need in Ireland?"
- "Can you recommend dog-friendly restaurants in Cork?"

## 💰 Cost Considerations

### OpenAI Pricing (GPT-3.5-turbo):
- **Input**: $0.0015 per 1K tokens
- **Output**: $0.002 per 1K tokens
- **Average Cost**: ~$0.01-0.03 per conversation

### Cost Management:
- Set usage limits in OpenAI dashboard
- Monitor usage through OpenAI console
- Implement rate limiting if needed
- Consider caching common responses

## 🔧 Customization Options

### Modify Chatbot Personality:
Edit the system prompt in `api/chat.js`:
```javascript
content: `You are Buddy's AI assistant...`
```

### Change Appearance:
Update colors and styling in `DogChatbot.tsx`:
```css
className="bg-irish-purple..."
```

### Add Features:
- **Voice Input**: Add speech recognition
- **File Upload**: Allow image uploads for dog photos
- **Booking Integration**: Connect to appointment systems
- **Multi-language**: Support Irish Gaelic

## 📊 Analytics & Monitoring

### Track Usage:
- Monitor OpenAI dashboard for usage stats
- Add Google Analytics events for chat interactions
- Log popular questions for content ideas

### Performance:
- Response time typically 1-3 seconds
- 99.9% uptime with proper hosting
- Scales automatically with your traffic

## 🛡️ Security & Privacy

### Data Protection:
- No conversation data stored permanently
- API keys secured in environment variables
- HTTPS encryption for all communications
- GDPR compliant (no personal data retention)

### Best Practices:
- Rotate API keys regularly
- Monitor for unusual usage patterns
- Set up alerts for high usage
- Keep dependencies updated

## 🚀 Going Live

### Pre-Launch Checklist:
- ✅ API key configured
- ✅ Backend deployed
- ✅ Test conversations working
- ✅ Mobile responsiveness verified
- ✅ Error handling tested
- ✅ Usage monitoring set up

### Launch Strategy:
1. **Soft Launch**: Enable for limited users
2. **Gather Feedback**: Monitor conversations and responses
3. **Optimize**: Improve prompts based on real usage
4. **Full Launch**: Announce to all users
5. **Promote**: Add to marketing materials

## 📞 Support

### Common Issues:
- **API Key Error**: Check environment variables
- **No Response**: Verify backend deployment
- **Slow Responses**: Check OpenAI status page
- **Rate Limits**: Implement usage controls

### Getting Help:
- OpenAI Documentation: [platform.openai.com/docs](https://platform.openai.com/docs)
- React Support: Check component console logs
- Deployment Issues: Verify environment variables

---

**Your dog-loving customers now have 24/7 access to expert advice! 🐕🇮🇪**

