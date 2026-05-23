import { ShieldCheck, TrendingUp, Headset, Gift } from 'lucide-react';

const featuresData = [
  { icon: ShieldCheck, title: 'Secure', description: 'SAFU protection for your assets' },
  { icon: TrendingUp, title: 'Advanced Tools', description: 'Powerful trading tools for all' },
  { icon: Headset, title: '24/7 Support', description: 'Help anytime, anywhere' },
  { icon: Gift, title: 'Rewards', description: 'Earn rewards as you trade' },
];

export default function Features() {
  return (
    <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-200 mt-12">
      {featuresData.map((feature, idx) => (
        <div key={idx} className="text-center space-y-2 text-gray-900 cursor-pointer" onClick={() => window.open('https://accounts.binance.com/en/register', '_blank')}>
          <feature.icon className="w-10 h-10 text-[#f0b90b] mx-auto" />
          <h4 className="font-semibold">{feature.title}</h4>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
