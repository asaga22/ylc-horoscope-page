"use client"
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Forecast from './forecast';
import Famous from './famous';
import Signup from './signup';
import PersonalityTraits from './personality-traits';
import CelebBirthday from './celeb_birthday';
import { ZODIAC_SIGNS, ZodiacSign } from '@/app/types/type';
import { useParams } from 'next/navigation';

const HoroscopePage: FC = () => {

  const params = useParams();
  const { horoscope } = params
  const [zodiac, setZodiac] = useState<ZodiacSign>();

  useEffect(() => {
    if (horoscope) {
      const zodiacSign = ZODIAC_SIGNS.find((sign) => sign.slug === horoscope);
      setZodiac(zodiacSign);
    }
  }, [horoscope]);

  return (
    <>
      <Head>
        <title>YLC - {zodiac?.name}</title>
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8 bg-white">
        {/*HEADER */}
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-yellow-50 rounded-full p-4 mr-4 w-24 h-24 flex-shrink-0">
              <Image
                src={`/assets/${zodiac?.icon}`}
                alt={`${zodiac?.name} zodiac sign`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold uppercase text-gray-800">{zodiac?.name}</h1>
              <p className="text-sm text-gray-600 mt-1">
                Born under the blazing sign of the Ram, you&apos;re a natural-born trailblazer led by Mars, the planet of action and courage. 
                As the first sign of the zodiac, you spark the cosmic wheel into motion with your fierce spirit and unstoppable drive.
              </p>
            </div>
          </div>
        </div>

        {/* FORECAST SECTION */}
        <Forecast />

        {/* ABOUT TODAY SECTION */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">ABOUT TODAY</h2>

        {/* Celebrity Birthdays Grid */}
        <CelebBirthday />

        {/* HOROSCOPE EXPLAINED */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">ARIES HOROSCOPE EXPLAINED</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Aries</strong> is the &apos;youngest&apos; star sign and originates from the constellation of the same name. 
              Symbolized by the ram, Aries is a fire sign ruled by Mars – the god of war. This means they can have quite a temper, and plenty of passion.
            </p>
            <p>
              Aries are born between 21 March and 19 April.
            </p>
          </div>
        </div>

        {/* PERSONALITY TRAITS */}
        <PersonalityTraits />

        {/* FAMOUS */}
        <Famous />

        {/* SIGN UP BANNER */}
        <Signup />
      </main>
    </>
  );
};

export default HoroscopePage;