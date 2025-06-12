import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, PawPrint } from 'lucide-react';
import mascotPic from '../assets/images/dp2.jpg'; // Main mascot image
import dogImage from '../assets/images/dog.jpg'; // Second mascot image

const MascotPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Meet Our Mascot - Dog Days Ireland</title>
                <meta name="description" content="Meet our beloved Dog Days Ireland mascot and learn about our mission to help dogs and their owners across Ireland." />
                <link rel="canonical" href="https://www.dogdays.ie/mascot" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Heart className="h-8 w-8 mr-3" />
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Meet Our Mascot!
                            </h1>
                            <PawPrint className="h-8 w-8 ml-3" />
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            The friendly face representing our love for dogs and commitment to the Irish dog owner community
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    {/* Mascot Images Section - Uniform Height */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Main Mascot Image - Fixed Height */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="h-96 overflow-hidden">
                                <img
                                    src={mascotPic}
                                    alt="Dog Days Ireland Mascot"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                                    Our Official Mascot
                                    <PawPrint className="h-5 w-5 ml-2 text-purple-500" />
                                </h3>
                                <p className="text-gray-600">
                                    This is our official Dog Days Ireland mascot, embodying the spirit of joy, companionship, and adventure.
                                </p>
                            </div>
                        </div>

                        {/* Second Mascot Image - Full Image Visible */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="h-96 bg-gray-50 flex items-center justify-center">
                                <img
                                    src={dogImage}
                                    alt="Dog Days Ireland Mascot - Behind the Scenes"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                                    Behind the Scenes
                                    <Heart className="h-5 w-5 ml-2 text-pink-500" />
                                </h3>
                                <p className="text-gray-600">
                                    More adorable moments with our beloved mascot, showing the personality and charm that makes them perfect for Dog Days Ireland!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Story Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                                <PawPrint className="h-7 w-7 mr-3 text-purple-500" />
                                Our Story
                                <Heart className="h-7 w-7 ml-3 text-pink-500" />
                            </h2>

                            <div className="prose prose-lg text-gray-700 mx-auto space-y-6">
                                <p className="text-lg leading-relaxed">
                                    Our mascot embodies the spirit of joy, companionship, and adventure that we aim to foster among dog owners in Ireland. They remind us every day why we do what we do – to make life better for pets and their humans.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Dog Days Ireland was founded on the belief that finding the best services and places for your dog should be easy and enjoyable. From top-rated vets to beautiful parks, trusted groomers, and expert trainers, we curate and provide all the information you need in one convenient place.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    We are constantly working to expand our network and provide the most up-to-date resources, ensuring that every dog in Ireland can live their best life, full of happy "dog days."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            To create a comprehensive, trusted resource that connects Irish dog owners with the best services, places, and community support for their beloved companions.
                        </p>
                        <div className="flex justify-center items-center mt-6 space-x-4">
                            <PawPrint className="h-6 w-6" />
                            <Heart className="h-6 w-6" />
                            <PawPrint className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MascotPage;

