import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MY FINANCE",
  description: "Where Financial Freedom Begins",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-cyan-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <div className="inline-flex items-center justify-center gap-1.5">
                <p>Developed by <b>SRISAI SHIVAKOTI</b></p>
                <Image 
                  src="/profile_pic.jpg" // Replace with your image path
                  alt="Developer Photo" 
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover transition-transform hover:scale-110"
                />
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
