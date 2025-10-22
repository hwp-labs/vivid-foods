import "./globals.css";

import type { Metadata } from "next";
import { AppQueryClientProvider } from "@/lib/tanstack/provider";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: APP.title,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <h1>RootLayout</h1>
        <AppQueryClientProvider>{children}</AppQueryClientProvider>
      </body>
    </html>
  );
}
