import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Montserrat fonts with different weights
const montserratBlack = localFont({
  src: "./fonts/Montserrat-Black.ttf",
  variable: "--font-montserrat-black",
});

const montserratBold = localFont({
  src: "./fonts/Montserrat-Bold.ttf",
  variable: "--font-montserrat-bold",
});

const montserratExtraBold = localFont({
  src: "./fonts/Montserrat-ExtraBold.ttf",
  variable: "--font-montserrat-extrabold",
});

const montserratExtraLight = localFont({
  src: "./fonts/Montserrat-ExtraLight.ttf",
  variable: "--font-montserrat-extralight",
});

const montserratLight = localFont({
  src: "./fonts/Montserrat-Light.ttf",
  variable: "--font-montserrat-light",
});

const montserratMedium = localFont({
  src: "./fonts/Montserrat-Medium.ttf",
  variable: "--font-montserrat-medium",
});

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat-regular",
});

const montserratSemiBold = localFont({
  src: "./fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserrat-semibold",
});

const montserratThin = localFont({
  src: "./fonts/Montserrat-Thin.ttf",
  variable: "--font-montserrat-thin",
});

// Metadata
export const metadata: Metadata = {
  title: "Vitco impex - Dairy machineries manufactures",
  description:
    "“Vijay Trading Company”, are engaged in Manufacturing, Trading, and Wholesaling of a wide range of Milk Analyzer, Packing Machine, Vending Machine and much more. Our company is Sole Proprietorship (Individual), based company. Under the management of “Pradeep Goswami”, we have gained huge popularity among clients.",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserratBlack.variable} 
          ${montserratBold.variable} 
          ${montserratExtraBold.variable} 
          ${montserratExtraLight.variable} 
          ${montserratLight.variable} 
          ${montserratMedium.variable} 
          ${montserratRegular.variable} 
          ${montserratSemiBold.variable} 
          ${montserratThin.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
