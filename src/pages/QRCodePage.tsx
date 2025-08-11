import React from 'react';
import { Link } from 'react-router-dom';
import qrCodeImage from '../assets/images/qrcode.png';

const QRCodePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-irish-navy to-purple-800 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-irish-navy mb-2">
                        Visit DogDays.ie
                    </h1>
                    <p className="text-gray-600">
                        Scan with your phone to visit our website
                    </p>
                </div>

                {/* Large QR Code */}
                <div className="bg-gray-50 p-6 rounded-2xl mb-8 shadow-inner">
                    <img
                        src={qrCodeImage}
                        alt="QR Code for DogDays.ie"
                        className="w-64 h-64 mx-auto"
                    />
                </div>

                {/* Instructions */}
                <div className="mb-8 space-y-3">
                    <div className="flex items-center justify-center space-x-3 text-sm text-gray-700">
                        <span className="bg-irish-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">1</span>
                        <span>Open your phone's camera</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-sm text-gray-700">
                        <span className="bg-irish-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">2</span>
                        <span>Point at the QR code above</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-sm text-gray-700">
                        <span className="bg-irish-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">3</span>
                        <span>Tap the notification to visit our site</span>
                    </div>
                </div>

                {/* URL Display */}
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600 mb-1">Or visit directly:</p>
                    <p className="font-mono text-irish-navy font-semibold">
                        www.dogdays.ie
                    </p>
                </div>

                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center bg-irish-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    ← Back to Home
                </Link>

                {/* Footer Note */}
                <p className="text-xs text-gray-500 mt-6">
                    Find dog-friendly places, services, and adventures across Ireland
                </p>
            </div>
        </div>
    );
};

export default QRCodePage;