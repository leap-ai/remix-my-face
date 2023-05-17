import { Inter } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Providers } from "./providers";

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
    <html
      lang="en"
      style={{
        minHeight: "100vh",
      }}
    >
      <body
        className={inter.className}
        style={{
          height: "100%",
        }}
      >
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
