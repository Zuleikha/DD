// src/pages/Blog.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DogDays.ie - Blog</title>
        <meta name="description" content="Stay updated with the latest news and articles from DogDays.ie." />
        <link rel="canonical" href="https://www.dogdays.ie/blog" />
      </Helmet>
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Our Blog
        </h1>
        <p className="text-center text-lg text-gray-600">
          Welcome to the DogDays.ie blog! This is the full blog page content.
          You can expand this with a list of all your blog posts.
        </p>
        {/* You could potentially import and use BlogPreview here if you want to show it again */}
        {/* For example: <BlogPreview /> */}
      </div>
    </>
  );
};

export default Blog;