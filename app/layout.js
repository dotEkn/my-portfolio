import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "William Ekengren | Portfolio",
  description: "Cybersecurity & Microdata Analysis Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.className} bg-gradient-to-b from-gray-950 via-gray-900 to-blue-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
