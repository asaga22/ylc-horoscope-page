import React from 'react';
import Image from 'next/image';
import { ZodiacSign } from '../../types/type';
import { to3LetterMonthName } from '@/app/utils/util';
import Link from 'next/link';

interface ZodiacGridProps {
  zodiacSigns: ZodiacSign[];
}

const ZodiacGrid: React.FC<ZodiacGridProps> = ({ zodiacSigns }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {zodiacSigns.map((sign) => (
        <Link href={`/game/horoscope/${sign.slug}`} key={sign.name}>
          <div
            key={sign.name}
            className={`${sign.color} cursor-pointer rounded-lg items-center text-center border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out`}
          >
            <div className="relative rounded-lg h-32 mb-2" style={{backgroundColor: sign.color}}>
              <Image
                src={`/assets/${sign.icon}`}
                alt={`${sign.name} zodiac sign`}
                fill
                className="object-contain py-4"
              />
            </div>
            <div className="p-2">
              <h2 className="font-bold">{sign.name}</h2>
              <p className="text-sm text-gray-600">{to3LetterMonthName(sign.dateStart)} - {to3LetterMonthName(sign.dateEnd)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ZodiacGrid;