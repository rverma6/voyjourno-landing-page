import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBwqBsugsvpUib1-xeIyED8W46yZUHatVo",
  authDomain: "voyjourno-2f5f6.firebaseapp.com",
  projectId: "voyjourno-2f5f6",
  storageBucket: "voyjourno-2f5f6.firebasestorage.app",
  messagingSenderId: "694347066517",
  appId: "1:694347066517:web:b1211d03731b18d564ff9c",
  measurementId: "G-R1ZRTPKPH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('waitlist-email');
    const email = emailInput.value;
    
    if (!email) return;

    try {
      // Add email to Firestore
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: new Date()
      });
      
      // Clear input and show success
      emailInput.value = '';
      alert('Thanks for joining the waitlist!');
    } catch (error) {
      console.error("Error adding email:", error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-300">
      {/* Header */}
      {/* AWIN AWIN AWIN */}
      <header className="fixed top-0 left-0 right-0 bg-primary-100/80 backdrop-blur-md z-50 border-b border-primary-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">VoyJourno</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a> */}
            <button 
              onClick={() => {
                document.getElementById('waitlist-email').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700"
            >
              Join Waitlist
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Plan Together. Plane Together.
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6">
              Plan your perfect trip with AI-powered recommendations. Get personalized itineraries, 
              find hidden gems, and make your travel dreams come true.
            </p>
            <div className="mt-8 sm:mt-10 flex justify-center px-4 sm:px-0">
              <div className="relative max-w-md w-full">
                <input
                  id="waitlist-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-24 sm:pr-36"
                />
                <button 
                  onClick={handleSubmit}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 sm:px-6 py-2 sm:py-2.5 bg-primary-600 text-white text-sm sm:text-base rounded-full hover:bg-primary-700 shadow-sm transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div id="how-it-works" className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] rounded-3xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900">How It Works</h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tell us your preferences",
                  description: "Share your travel style, interests, and must-sees with our AI."
                },
                {
                  title: "Get personalized plans",
                  description: "Receive custom itineraries tailored to your unique preferences."
                },
                {
                  title: "Travel with confidence",
                  description: "Enjoy your trip with detailed plans and local insights."
                }
              ].map((step, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add responsive padding at the bottom */}
        <div className="h-16 sm:h-24"></div>
        <footer className="fixed bottom-0 left-0 right-0 bg-primary-100/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center items-center">
              <div className="text-sm text-gray-900 text-center mb-2">
                AWIN
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Footer */}
    </div>
  );
}

export default App;
