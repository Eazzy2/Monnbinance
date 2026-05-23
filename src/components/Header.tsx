import { User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-6 flex justify-between items-center text-gray-900">
      <div className="flex items-center gap-2 text-2xl font-bold text-[#f0b90b]">
        <span>◆</span> BINANCE
      </div>
      <div className="flex gap-6 items-center cursor-pointer" onClick={() => window.open('https://accounts.binance.com/en/register', '_blank')}>
        <User className="h-6 w-6" />
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-[#f0b90b] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
        </div>
      </div>
    </header>
  );
}
