import React from 'react';
import Link from 'next/link';
import { Facebook, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white md:py-12 sm: p-4">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {/* Legal Links Column */}
        <div className="space-y-4 flex sm:justify-start md:justify-center">
          <div className='fit-content'>
            <Link href="/privacy" className="block hover:text-gray-300">
              Privacy policy
            </Link>
            <Link href="/terms-of-service" className="block hover:text-gray-300">
              Terms of Service
            </Link>
            <Link href="/terms-and-conditions" className="block hover:text-gray-300">
              Terms and Conditions
            </Link>
            <Link href="/editorial-policy" className="block hover:text-gray-300">
              Editorial Policy
            </Link>
            <Link href="/faqs" className="block hover:text-gray-300">
              FAQs
            </Link>
          </div>
        </div>

        {/* About Us Column */}
        <div className="space-y-4 flex justify-center">
          <div className='fit-content'>
            <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
            <p className="text-sm">
              YourLifeChoices is Australia&apos;s most established and trusted digital publication for the 50+ audience, with a core focus on helping Australians navigate midlife and the retirement landscape.
            </p>
            <p className="text-sm mt-4">
              Since 2000, YourLifeChoices has been providing Australians with essential news, articles and retirement resources - and membership is FREE!
            </p>
          </div>
        </div>

        {/* Social Links Column */}
        <div className="space-y-4 flex md:justify-center sm:justify-start">
          <div className='fit-content'>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/yourlifechoices" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-white hover:text-gray-300" size={24} />
              </Link>
              <Link href="https://x.com/yourlifechoices" target="_blank" rel="noopener noreferrer">
                <X className="text-white hover:text-gray-300" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;