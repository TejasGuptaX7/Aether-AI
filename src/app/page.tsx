'use client';

import { useRouter } from "next/navigation";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  const productPoints = [
    "Powerful AI-driven writing assistance",
    "Seamless content generation and editing",
    "Advanced language understanding",
    "Customizable writing styles",
    "Real-time collaboration features",
    "Secure and private writing environment",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="tiny-stars"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md relative z-10">
        {/* Left Icon */}
        <div className="flex items-center space-x-3">
          <span className="bg-gray-700 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v7.5m0 0H9m3 0h3M12 3c4.97 0 9 4.03 9 9 0 4.97-4.03 9-9 9s-9-4.03-9-9c0-4.97 4.03-9 9-9z"
              />
            </svg>
          </span>
        </div>

        {/* Center Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/use-cases"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Use Cases
          </Link>
          <Link
            href="/features"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/team"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Team
          </Link>
        </div>

        {/* Right: Profile/Sign In */}
        <div className="flex items-center space-x-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center bg-gray-700 px-4 py-2 rounded-full text-lg font-medium hover:bg-gray-600 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  rootBox: "bg-gray-700 text-white p-1 rounded-full hover:bg-gray-600",
                },
              }}
            />
            <span className="text-lg font-medium">Dashboard</span>
          </SignedIn>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 relative z-10">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full mb-6 hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <button
            onClick={handleGetStarted}
            className="bg-green-600 text-white px-6 py-3 rounded-full mb-6 hover:bg-green-700 transition-colors"
          >
            Get Started
          </button>
        </SignedIn>

        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          The Ultimate Writing Experience
        </h1>
        <p className="text-xl text-gray-300 mb-16">
          Let AI do the heavy lifting while you focus on creativity
        </p>
      </section>

      {/* Product Points Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 gap-8 p-6 relative z-10">
        {productPoints.map((point, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <p className="text-gray-200 text-lg">{point}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
