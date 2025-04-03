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
        {/* Google site verification meta tag */}
        <meta name="google-site-verification" content="7FCbr0FOZIS_rxi8hEM2KL6UZLdzWPRt2SsAA3m92k0" />
        
        {/* Other metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
