// src/pages/EventsCalendarPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Assuming you use Helmet for SEO

const EventsCalendarPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DogDays.ie - Events Calendar</title>
        <meta name="description" content="Find upcoming dog-friendly events, meetups, and activities across Ireland." />
        {/* You might want a canonical URL if this page has a stable URL */}
        <link rel="canonical" href="https://www.dogdays.ie/events-calendar" />
      </Helmet>

      <div className="container mx-auto p-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Upcoming Dog-Friendly Events
        </h1>

        <p className="text-center text-lg text-gray-600 mb-12">
          Check out our calendar for a paws-itively packed schedule of events for you and your furry friend!
        </p>

        {/* This is where you would integrate your actual calendar component or event listings */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Listings</h2>
          <div className="text-gray-700">
            {/* Placeholder for future calendar integration */}
            <p className="mb-4">
              Here you can display events. You might fetch them from an API,
              or use a React calendar library like `react-calendar` or `FullCalendar`.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>**Example Event:** Puppy Playdate - Dublin Park (June 10, 2025)</li>
              <li>**Example Event:** Charity Dog Walk - Cork City (July 5, 2025)</li>
              <li>**Example Event:** Dog Agility Workshop - Galway (August 20, 2025)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Stay tuned for more details and registration links!
            </p>
          </div>
        </section>

        {/* You can add more sections here, e.g., an event submission form */}
        <section className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Have an Event to Share?</h2>
          <p className="text-blue-600 mb-6">
            If you're organizing a dog-friendly event in Ireland, let us know!
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            Submit Your Event
          </button>
        </section>
      </div>
    </>
  );
};

export default EventsCalendarPage;