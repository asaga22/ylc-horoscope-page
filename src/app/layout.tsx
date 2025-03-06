import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/topbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "YourLifeChoices - Best digital publication",
  description: "YourLifeChoices is Australia's most established and trusted digital publication for the 50+ audience, with a core focus on helping Australians navigate midlife and the retirement landscape.",
  icons: "favicon.ico",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FFFFFF",
  twitter: {
    card: "summary",
    site: "@yourlifechoices",
    creator: "@yourlifechoices",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.yourlifechoices.com.au",
    siteName: "YourLifeChoices",
    title: "YourLifeChoices - Best digital publication",
    description: "YourLifeChoices is Australia's most established and trusted digital publication for the 50+ audience, with a core focus on helping Australians navigate midlife and the retirement landscape.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
