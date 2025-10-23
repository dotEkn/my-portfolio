import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "William's Portfolio",
  description: "Cybersecurity & Microdata Analysis Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
