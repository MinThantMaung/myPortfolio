import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Providers from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Min Thant Mg | Front-end Developer",
  description:
    "Portfolio of Min Thant Mg – a passionate front-end developer with expertise in React, Next.js, and modern web technologies. Discover projects, skills, and more.",
  timeZone: "Europe/Vienna",
};

async function loadMessages(locale) {
  let messages = {};
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default || {};
  } catch (error) {
    console.error("Error loading messages:", error);
  }
  return JSON.parse(JSON.stringify(messages));
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await loadMessages(locale);
  return (
    <html lang={locale} className="!scroll-smooth">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content="Portfolio of Min Thant Mg – a passionate front-end developer with expertise in React, Next.js, and modern web technologies. Discover projects, skills, and more."/>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone={metadata.timeZone}
        >
          <Providers>
            {children}
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
