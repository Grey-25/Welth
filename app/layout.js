import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const inter =Inter({subsets : ["latin"]});

export const metadata = {
  title: "welth",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className }`}>
          {/*headers*/}
          <Header/>
          <main className="min-h-screen">
          {children}
          </main>
        {/*footer*/}
        <footer className=" bg-blue-50 py-12 " >
          <div className="cantainer mx-auto px-4 text-center text-gray-600">
            <p> made with love </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
