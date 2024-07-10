"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { useEffect } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const firebaseConfig = {
    apiKey: "AIzaSyCwU76Wlwc-55i5XGm9cA6b1DwPgljkjOQ",
    authDomain: "my-portfolio-29f09.firebaseapp.com",
    projectId: "my-portfolio-29f09",
    storageBucket: "my-portfolio-29f09.appspot.com",
    messagingSenderId: "183966692903",
    appId: "1:183966692903:web:e4a44b7f010db15480c002",
    measurementId: "G-NYPW5J58YY"
  };

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    const setupAnalytics = async () => {
      if (typeof window !== "undefined" && await isSupported()) {
        const analytics = getAnalytics(app);
      }
    };
    setupAnalytics();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
