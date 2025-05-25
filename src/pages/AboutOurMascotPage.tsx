// src/pages/AboutOurMascotPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import dp2Image from '../assets/images/dp2.jpg'; // Import your dp2.jpg image

const AboutOurMascotPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DogDays.ie - Meet Our Mascot</title>
        <meta name="description" content="Learn more about the DogDays.ie mascot and the inspiration behind our mission." />
        <link rel="canonical" href="https://www.dogdays.ie/our-mascot" />
      </Helmet>

      <div className="container mx-auto p-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Meet Our Beloved Mascot!
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src={dp2Image}
            alt="DogDays.ie Mascot"
            className="max-w-full h-auto rounded-lg shadow-lg md:max-w-2xl" // Responsive sizing
          />
        </div>

        <p className="text-center text-lg text-gray-600 mb-6">
          This is our adorable mascot who embodies the spirit of DogDays.ie! He's the furry inspiration
          behind our commitment to helping dog owners across Ireland find the best services and places
          for their beloved companions.
        </p>
        <p className="text-center text-md text-gray-500">
          We believe every dog deserves a happy, healthy, and fulfilling life, and our mascot is a daily
          reminder of that mission.
        </p>
      </div>
    </>
  );
};

export default AboutOurMascotPage;