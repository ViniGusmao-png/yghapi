'use client'
import localFont from "next/font/local";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from "react";
import './global.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(()=> new QueryClient())
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <MantineProvider>
        <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
