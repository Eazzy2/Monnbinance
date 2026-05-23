import { motion } from 'motion/react';
import Features from './Features';

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-gray-900">
      
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Trade Crypto.<br />
          <span className="text-[#f0b90b]">Grow Your Wealth.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Trade 700+ cryptocurrencies on a secure platform.
        </p>
        <div className="flex flex-col gap-4 pt-4">
          <button 
            className="w-full px-8 py-4 bg-[#f0b90b] text-black font-bold rounded-lg hover:scale-105 transition-transform"
            onClick={() => window.open('https://accounts.binance.com/en/register', '_blank')}
          >
            Sign Up / Get Started
          </button>
          <button 
            className="w-full px-8 py-4 bg-transparent border-2 border-[#f0b90b] text-[#f0b90b] font-bold rounded-lg hover:bg-yellow-50 transition-colors"
            onClick={() => window.open('https://accounts.binance.com/en/register', '_blank')}
          >
            Explore Markets
          </button>
        </div>
        <Features />
      </div>

      <div className="hidden lg:block relative">
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#fff0b9] rounded-l-full -z-10 translate-x-1/4 -translate-y-1/2" />
        <img 
          src="https://i.ibb.co/0jKzK9Y/binance-phone-mockup.png" 
          alt="Binance App Mockup" 
          className="w-full h-auto relative z-10"
        />
      </div>
    </section>
  );
}
