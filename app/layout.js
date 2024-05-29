import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Make Components",
  description: "This compoenets is easy and make a website",
  icons: {
    icon: 'https://www.makecomponents.com/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
