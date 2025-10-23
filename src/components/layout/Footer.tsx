import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export default function Footer() {
  return (
    <footer className="relative py-32 overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(150, 180, 220)"
        gradientBackgroundEnd="rgb(180, 200, 240)"
        firstColor="100, 150, 255"
        secondColor="180, 120, 255"
        thirdColor="120, 200, 255"
        fourthColor="255, 150, 200"
        fifthColor="200, 180, 100"
        pointerColor="150, 100, 255"
        containerClassName="!absolute !h-full !w-full"
      >
        <div className="relative z-50 max-w-7xl mx-auto px-6">
          {/* Newsletter Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-4xl">S</span>
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SafyCore</h3>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Updated with SafyCore</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, features, and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border-2 border-white/40 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/80 transition-all shadow-lg text-lg w-full sm:w-auto"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-5 gap-16 mb-16">
            {/* Company Info - Larger Column */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">About SafyCore</h4>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Your next generation AI-powered platform that revolutionizes how you interact with technology.
                Built for the future, available today. Empowering businesses and individuals worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-700 font-medium">Users</div>
                </div>
                <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-700 font-medium">Uptime</div>
                </div>
                <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-pink-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-700 font-medium">Support</div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/80 transition-all hover:scale-110 shadow-lg group">
                  <svg className="w-6 h-6 text-gray-900 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/80 transition-all hover:scale-110 shadow-lg group">
                  <svg className="w-6 h-6 text-gray-900 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/80 transition-all hover:scale-110 shadow-lg group">
                  <svg className="w-6 h-6 text-gray-900 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/80 transition-all hover:scale-110 shadow-lg group">
                  <svg className="w-6 h-6 text-gray-900 group-hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/80 transition-all hover:scale-110 shadow-lg group">
                  <svg className="w-6 h-6 text-gray-900 group-hover:text-purple-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500/30 pb-3">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-gray-700 hover:text-blue-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 hover:text-blue-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    About
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-700 hover:text-blue-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-gray-700 hover:text-blue-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-purple-500/30 pb-3">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg transition-all hover:translate-x-2 inline-block font-medium flex items-center gap-2 group">
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-pink-500/30 pb-3">Contact Us</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <span className="text-gray-900 text-base font-semibold hover:text-blue-600 transition-colors cursor-pointer">hello@safycore.com</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <span className="text-gray-900 text-base font-semibold hover:text-purple-600 transition-colors cursor-pointer">+1 (555) 123-4567</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Address</div>
                    <span className="text-gray-900 text-base font-semibold">123 Tech Street,<br />Silicon Valley, CA</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-white/40 pt-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <p className="text-gray-900 text-lg font-bold mb-2">
                  &copy; 2025 SafyCore. All rights reserved.
                </p>
                <p className="text-gray-700 text-sm">
                  Empowering the future, one innovation at a time.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 text-base transition-colors font-semibold hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-base transition-colors font-semibold hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-base transition-colors font-semibold hover:underline">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-base transition-colors font-semibold hover:underline">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </footer>
  );
}
