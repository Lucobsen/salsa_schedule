import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import NavBar from "@/app/components/NavBar/NavBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Dance Directory",
  description: "Generated by Luke Jacobsen",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <NavBar />
        {children}
        <Analytics />
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
