import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dentlab - Professional Dental Clinic',
  description: 'We are ready to help your dental problems. Dedicated to your dental health.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white min-h-screen text-[#1C1E26] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
