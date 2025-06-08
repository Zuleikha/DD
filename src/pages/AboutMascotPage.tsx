import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint } from 'lucide-react';
import SEO from '../components/common/SEO';
import dogImage from '../assets/images/dog.jpg';

const AboutMascotPage: React.FC = () => {
    // SVG Paw Print Component
    const PawPrint = ({ size = 24, className = "", opacity = 0.2 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            style={{ opacity }}
        >
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 7C16.1 7 17 7.9 17 9C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 9C13 7.9 13.9 7 15 7ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM12 14C15.31 14 18 16.69 18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20C6 16.69 8.69 14 12 14Z" />
        </svg>
    );

    // SVG Bone Component
    const Bone = ({ size = 24, className = "", opacity = 0.2 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            style={{ opacity }}
        >
            <path d="M3.5 6C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9C4.33 9 5 8.33 5 7.5S4.33 6 3.5 6ZM20.5 6C19.67 6 19 6.67 19 7.5S19.67 9 20.5 9C21.33 9 22 8.33 22 7.5S21.33 6 20.5 6ZM3.5 15C2.67 15 2 15.67 2 16.5S2.67 18 3.5 18C4.33 18 5 17.33 5 16.5S4.33 15 3.5 15ZM20.5 15C19.67 15 19 15.67 19 16.5S19.67 18 20.5 18C21.33 18 22 17.33 22 16.5S21.33 15 20.5 15ZM6 7.5C6 8.88 7.12 10 8.5 10H15.5C16.88 10 18 8.88 18 7.5C18 6.12 16.88 5 15.5 5H8.5C7.12 5 6 6.12 6 7.5ZM6 16.5C6 17.88 7.12 19 8.5 19H15.5C16.88 19 18 17.88 18 16.5C18 15.12 16.88 14 15.5 14H8.5C7.12 14 6 15.12 6 16.5Z" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO
                title="About Our Mascot - Dog Days Ireland"
                description="Meet our adorable mascot and learn about the story behind Dog Days Ireland's mission to connect dog owners with the best services across the country."
                canonicalUrl="https://www.dogdays.ie/about-mascot"
            />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 animate-pulse">
                        <PawPrint size={60} opacity={0.1} className="animate-bounce" />
                    </div>
                    <div className="absolute top-20 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
                        <Bone size={40} opacity={0.1} className="animate-bounce" />
                    </div>
                    <div className="absolute bottom-20 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
                        <PawPrint size={80} opacity={0.1} className="animate-bounce" />
                    </div>
                    <div className="absolute bottom-10 right-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
                        <Bone size={50} opacity={0.1} className="animate-bounce" />
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    {/* Back button */}
                    <Link
                        to="/"
                        className="inline-flex items-center text-white hover:text-purple-200 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <PawPrint size={40} opacity={0.8} className="text-white" />
                            <h1 className="text-4xl md:text-5xl font-bold">About Our Mascot</h1>
                            <PawPrint size={40} opacity={0.8} className="text-white" />
                        </div>
                        <div className="flex justify-center space-x-3 mb-6">
                            <Bone size={25} opacity={0.6} className="text-white" />
                            <Bone size={25} opacity={0.6} className="text-white" />
                            <Bone size={25} opacity={0.6} className="text-white" />
                        </div>
                        <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                            Meet the adorable face behind Dog Days Ireland and discover the heartwarming story of our mission
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">

                    {/* Mascot Image and Introduction */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 relative">
                        {/* Background decorations */}
                        <div className="absolute inset-0 pointer-events-none text-gray-100">
                            <div className="absolute top-6 right-6">
                                <PawPrint size={40} opacity={0.3} className="text-purple-200" />
                            </div>
                            <div className="absolute bottom-6 left-6">
                                <Bone size={35} opacity={0.3} className="text-purple-200" />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center p-8 lg:p-12 relative z-10">
                            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                                <div className="rounded-2xl overflow-hidden shadow-xl relative group">
                                    <img
                                        src={dogImage}
                                        alt="Our adorable mascot dog with yellow flower"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                                    />
                                    {/* Cute paw overlay on image */}
                                    <div className="absolute top-4 right-4">
                                        <PawPrint size={35} opacity={0.9} className="text-white drop-shadow-lg" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Heart size={30} className="text-red-500 drop-shadow-lg animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-6">
                                    <PawPrint size={30} opacity={0.4} className="text-purple-500 mr-3" />
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Meet Our Star</h2>
                                    <PawPrint size={30} opacity={0.4} className="text-purple-500 ml-3" />
                                </div>

                                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        Before Chewy became the beloved mascot of her new home,
                                        the adorable dog was adopted by a thoughtful family who wanted to make sure they were truly 
                                        ready for the commitment.
                                        To test the waters, they decided to foster a dog for two months,
                                        giving everyone in the household — especially the children — a chance to
                                        understand the responsibility that comes with caring for a pet.
                                    </p>
                                    <p>
                                        When the foster dog returned to the shelter, the family realized just how much joy and structure a dog brought
                                        into their lives. Confident in their ability to care for one of their own, they soon adopted their forever pup.
                                        It was a sensible and heartwarming approach to pet ownership, ensuring both the family and the dog were a great fit for each other.
                                    </p>

                                    <p>
                                    To share their journey and help other dog lovers, the family created a dog-friendly website packed with
                                    with helpful advice, fun activities, and resources for anyone considering or already living the dog life.
                                    From grooming tips to local dog-friendly events, the site offers a wide range of services and information.
                                    Best of all, it features an interactive chatbot that specializes in all things canine — ready to answer
                                    questions about training, health, behavior and more, its
                                    a one-stop hub for everything a dog owner (or future dog owner) might need.
                                    </p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why We Started Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative overflow-hidden">
                        {/* Background decorations */}
                        <div className="absolute inset-0 pointer-events-none text-gray-100">
                            <div className="absolute top-8 left-8">
                                <Bone size={50} opacity={0.2} className="text-purple-200" />
                            </div>
                            <div className="absolute bottom-8 right-8">
                                <PawPrint size={60} opacity={0.2} className="text-purple-200" />
                            </div>
                            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                                <PawPrint size={30} opacity={0.1} className="text-purple-200" />
                            </div>
                            <div className="absolute top-1/3 right-1/3">
                                <Bone size={25} opacity={0.1} className="text-purple-200" />
                            </div>
                        </div>

                        <div className="text-center mb-12 relative z-10">
                            <div className="flex items-center justify-center space-x-4 mb-6">
                                <Heart size={35} className="text-red-500" />
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Why We Started Dog Days Ireland</h2>
                                <Heart size={35} className="text-red-500" />
                            </div>
                            <div className="flex justify-center space-x-3">
                                <PawPrint size={20} opacity={0.4} className="text-purple-400" />
                                <PawPrint size={20} opacity={0.4} className="text-purple-400" />
                                <PawPrint size={20} opacity={0.4} className="text-purple-400" />
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-8 text-gray-600 text-lg leading-relaxed relative z-10">
                            <p className="text-center">
                                Dog Days Ireland began with a simple love for dogs and the joy they bring into our lives.
                                Like many families, we discovered firsthand how much a dog can become part of the heart of a
                                 home — offering loyalty, laughter, and unconditional love every single day. After fostering and
                                  eventually adopting our own furry friend, we realized just how much there is to learn, share, and 
                                  celebrate about life with dogs. We wanted to create a space that reflects that love, where fellow
                                   dog lovers can connect, support each other, and share their own stories.
                            </p>

                            <p className="text-center">
                                This isn’t just a website — it’s a community built for people who truly care 
                                
                                about their pets. Whether you’re thinking about adopting, already have a dog by your side, or just want to learn more, 
                                we’re here to help. Dog Days Ireland is a friendly corner of the internet where you’ll find advice,
                                 ideas for fun things to do with your dog, and a place to feel supported in your journey as a pet owner. 
                                 It’s all about making life better — for dogs and for the people who love them.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12 relative z-10">
                            <Link
                                to="/"
                                className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors group text-lg font-semibold"
                            >
                                <PawPrint size={20} className="mr-3 group-hover:animate-bounce" />
                                Explore Our Services
                                <Bone size={20} className="ml-3 group-hover:animate-bounce" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMascotPage;

