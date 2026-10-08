import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Judul tab dinamis: setiap page mengisi `title`, template menambahkan nama aplikasi.
// Contoh: export const metadata = { title: "Manage Student" }  ->  "Manage Student | Grand Hotel"
export const metadata: Metadata = {
  title: {
    default: 'Grand Hotel',
    template: '%s | Grand Hotel',
  },
  description:
    'Grand Hotel adalah aplikasi manajemen hotel yang memudahkan pengelolaan reservasi, kamar, dan layanan pelanggan.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
