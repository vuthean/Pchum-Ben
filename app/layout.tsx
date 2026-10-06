import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "បុណ្យភ្ជុំបិណ្ឌ ២០២៦ | ទៅវត្តជាមួយមិត្តភក្តិ",
  description: "កម្មវិធីទៅវត្តជាមួយមិត្តភក្តិ នៅថ្ងៃទី ១០ ខែតុលា ឆ្នាំ ២០២៦"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="km">
      <body>{children}</body>
    </html>
  );
}