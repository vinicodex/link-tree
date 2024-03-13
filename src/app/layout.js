import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vinicodex",
  description: "Welcome to vinicodex link-tree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen justify-center bg-[url('/svg/cornered-stairs.svg')] bg-cover bg-no-repeat opacity-75 overflow-hidden">{children}</body>
    </html>
  );
}
