import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZodiacSign } from '../../types/type';
import { toCompleteMonthName } from '@/app/utils/util';


const ZodiacCard: React.FC<ZodiacSign> = (zodiac) => {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 mb-6 hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row gap-4 border-b-2 border-gray-100 pb-4">
        {/* Zodiac Icon and Header */}
        <div className="flex items-start space-x-4">
          <div className="bg-yellow-50 rounded-full p-2 w-24 h-24 flex-shrink-0">
            <Image
              src={`/assets/${zodiac.icon}`}
              alt={`${zodiac.name} zodiac sign`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className='flex items-center gap-2'>
              <h1 className="text-xl font-bold text-gray-800 uppercase">{zodiac.name}</h1>
              <span className='font-bold'>({toCompleteMonthName(zodiac.dateStart) } - {toCompleteMonthName(zodiac.dateEnd)})</span>
            </div>
            <p className="text-gray-700 mt-2 text-sm">{zodiac.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Warrior Spirit */}
        <div className='border-r-2 border-gray-100 pr-4 ml-4'>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your {zodiac.spirit.name}:</h2>
          <p className="text-gray-700 text-sm">{zodiac.spirit.description}</p>
          <Link href={`/game/horoscope/${zodiac.slug}`} className="block mt-4 text-red-500 font-medium hover:underline">
            Click here for your free daily Australian {zodiac.name} horoscope
          </Link>
        </div>

        {/* Right Column - Fire Element Gifts */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{zodiac.gift.name}:</h2>
          <ul className="space-y-2">
            {zodiac.gift.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZodiacCard;