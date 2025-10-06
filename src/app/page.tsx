import React from "react";
import { BackgroundImageComponent } from "../components/bg-imgae/index";

export default function page() {
  return (
    <div>
      {/* Hero Section with Background */}
      <section className="relative min-h-screen">
        <BackgroundImageComponent />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to SafyCore
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Your next generation platform
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About SafyCore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SafyCore is a cutting-edge platform designed to revolutionize how you work with modern technology.
              Built with performance, security, and user experience in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">Optimized for speed and efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">Enterprise-grade security features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Latest technology and best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Features
            </h2>
            <p className="text-lg text-gray-600">
              Discover what makes SafyCore special
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Modern Architecture</h3>
              <p className="text-gray-600 mb-6">
                Built with the latest technologies including Next.js 15, React 19, and Tailwind CSS v4.
                Our architecture ensures scalability and maintainability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Server-side rendering
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  TypeScript support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Responsive design
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to experience the power of SafyCore? Contact us to learn more.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
