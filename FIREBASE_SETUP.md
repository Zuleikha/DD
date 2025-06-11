# Firebase Setup Instructions for DogDays.ie

## 🔥 Firebase Configuration Required

To enable authentication and the discussion forum, you need to set up a Firebase project and configure it.

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name your project (e.g., "dogdays-ie")
4. Enable Google Analytics (optional)
5. Create project

### Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication**
2. Click **Get started**
3. Go to **Sign-in method** tab
4. Enable **Email/Password** authentication
5. Save changes

### Step 3: Create Firestore Database

1. Go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location close to your users
5. Done

### Step 4: Get Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps**
3. Click **Web app** icon (`</>`)
4. Register your app (name: "DogDays.ie")
5. Copy the configuration object

### Step 5: Update Configuration File

Replace the placeholder values in `src/config/firebase.ts` with your actual Firebase config:

\`\`\`typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
\`\`\`

### Step 6: Set Firestore Rules (Optional - for production)

In Firestore Database > Rules, you can set more secure rules:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write forum posts
    match /forumPosts/{document} {
      allow read: if true; // Anyone can read posts
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
\`\`\`

## 🎉 That's it!

Once you've updated the Firebase configuration, your authentication and forum will work perfectly!

### Features Available:
- ✅ User registration with email/password
- ✅ User login/logout
- ✅ Password reset functionality
- ✅ Discussion forum with categories
- ✅ Post creation, replies, and likes
- ✅ Real-time updates
- ✅ User authentication protection

### Free Tier Limits:
- **50,000 monthly active users** (more than enough for most websites)
- **1 GiB storage** for Firestore
- **50,000 reads/day** and **20,000 writes/day**

