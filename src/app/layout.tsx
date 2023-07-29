import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const bodyClass = poppins.className + " mx-auto bg-smoke-50";

export const metadata = {
  title: "Jonathan's Portfolio",
  description: "Created by jonathantan1425",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
