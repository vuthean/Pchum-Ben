import type { Metadata } from 'next'; import './globals.css';
export const metadata: Metadata={title:'ភ្ជុំបិណ្ឌ ២០២៦ | ទៅវត្តជាមួយមិត្តភក្តិ',description:'ដំណើរទៅវត្តថ្ងៃទី ១០ តុលា ២០២៦'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="km"><body>{children}</body></html>}
