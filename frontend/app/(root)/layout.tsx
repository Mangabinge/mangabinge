import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { OptionsProvider } from "../_context/OptionsContext";
import "../_styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mangabinge",
  description: "Read Manga Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <OptionsProvider>{children}</OptionsProvider>
      </body>
    </html>
  );
}
