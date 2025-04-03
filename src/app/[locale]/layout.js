// app/[locale]/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Providers from "./components/Provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Min Thant Mg | Front-end Developer",
  description:
    "Portfolio of Min Thant Maung – a passionate front-end developer with expertise in React, Next.js, and modern web technologies. Discover projects, skills, and more.",
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
      <Head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KG16553EZF"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KG16553EZF');
          `}
        </script>
      </Head>
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
