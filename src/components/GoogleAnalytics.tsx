"use client";
import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-H9892WTKXC`}
      />
      <Script strategy="afterInteractive" id="google-analytics">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'G-H9892WTKXC');
      `}</Script>
    </>
  );
};

export default GoogleAnalytics;
