import React from "react";
import Breadcrumb from "@/app/components/breadcrumb";
import ZodiacGrid from "./zodiac_grid";
import { ZODIAC_SIGNS } from "@/app/types/type";
import ZodiacCard from "./zodiac_card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'YLC - Free Daily Australian Horoscopes',
  description: 'Discover what the stars have aligned for you today - from romance and fortune to career moves and personal growth. Our daily Australian horoscopes tap into ancient celestial wisdom to illuminate your path forward.',
  openGraph: {
    title: 'Free Daily Australian Horoscopes | YourLifeChoices',
    description: 'Get your daily horoscope prediction based on your zodiac sign.',
  },
};

const Home: React.FC = () => {

  return (
    <main>
      <div style={{background: "#FAFAFA"}} className="pb-4">
        <Breadcrumb />
        <section className="padded-wrapper mb-10">
          <h1 className="font-bold text-lg my-2">Free daily Australian horoscopes</h1>
          <p className="text-sm">Discover what the stars have aligned for you today - from romance and fortune to career moves and personal growth. Our daily Australian horoscopes tap into ancient celestial wisdom to illuminate your path forward.</p>
          <p className="text-sm mt-4">Ready to explore your cosmic forecast? Select your zodiac sign below for your free daily Australian horoscope.</p>
        </section>
      </div>

      <section className="padded-wrapper">
        <h3 className="font-bold my-4 text-sm">Click on your star sign to read your free daily Australian horoscope.</h3>
        <ZodiacGrid zodiacSigns={ZODIAC_SIGNS} />
      </section>
      
      <section className="padded-wrapper" style={{background: "#FAFAFA", paddingTop: "4rem", paddingBottom: "4rem"}}>
        {ZODIAC_SIGNS.map((sign) => (
          <ZodiacCard key={sign.name} {...sign} />
        ))}
      </section>
    </main>
  );
}

export default Home;