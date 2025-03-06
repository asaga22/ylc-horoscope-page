"use client";
import React from "react";
import Breadcrumb from "@/app/components/breadcrumb";
import ZodiacGrid from "./zodiac_grid";
import { ZODIAC_SIGNS } from "@/app/types/type";
import ZodiacCard from "./zodiac_card";
import Head from "next/head";

const Home: React.FC = () => {

  return (
    <>
      <Head>
        <title>YLC - Horoscope</title>
      </Head>

      <main>
        <div style={{background: "#FAFAFA"}}>
          <Breadcrumb 
            transformLabel={(label) => {
              return  label;
            }}
          />
          <section className="padded-wrapper mb-10">
            <h1 className="font-bold text-lg my-2">Free daily Australian horoscopes</h1>
            <p className="text-sm">Discover what the stars have aligned for you today - from romance and fortune to career moves and personal growth. Our daily Australian horoscopes tap into ancient celestial wisdom to illuminate your path forward.</p>
            <p className="text-sm mt-4">Ready to explore your cosmic forecast? Select your zodiac sign below for your free daily Australian horoscope.</p>
          </section>
        </div>
        <div className="padded-wrapper">
          <ZodiacGrid zodiacSigns={ZODIAC_SIGNS} />
          
          {ZODIAC_SIGNS.map((sign) => (
            <ZodiacCard key={sign.name} {...sign} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home;