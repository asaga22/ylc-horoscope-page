
"use client";
import Image from 'next/image'
import React from 'react';
interface AdvertisementProps {
  width?: number;
  height?: number;
  src?: string;
  redirectUrl?: string;
  alt?: string;
}

const Advertisement: React.FC<AdvertisementProps> = (props) => {
  const { width, height, src, redirectUrl } = props;
  return (
      <div className="advertisement flex items-center justify-center" style={{ width: width, height: height, backgroundColor: "#F2F2F2", borderRadius: "6px" }}>
        {src ? (
          <a href={redirectUrl} target="_blank" rel="noreferrer">
            <Image src={src} alt={"ad"} />
          </a>
        ) : (
          <h5 style={{color: "#B1B1B1"}}>Ads</h5>
        )}
      </div>
  );
}

export default Advertisement;