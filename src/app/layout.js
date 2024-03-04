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
      <body className="w-auto h-auto bg-slate-300 mx-4 my-4 flex justify-center">{children}</body>
    </html>
  );
}
