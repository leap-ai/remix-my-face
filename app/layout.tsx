import { Spacer, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Providers } from "./providers";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Remix My Face | powered by Leap",
  description: "Take a selfie, get a custom avatar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
