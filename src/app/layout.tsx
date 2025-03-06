import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/topbar";
import { ScreenSizeProvider } from "./provider/screen-size-provider";
import Footer from "./components/footer";
import Head from "next/head";


export const metadata: Metadata = {
  title: "YLC",
  description: "YourLifeChoices is Australia's most established and trusted digital publication for the 50+ audience, with a core focus on helping Australians navigate midlife and the retirement landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>YourLifeChoice - Best digital publication</title>
        <meta name={`description`} content={`YourLifeChoices is Australia's most established and trusted digital publication for the 50+ audience, with a core focus on helping Australians navigate midlife and the retirement landscape.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body suppressHydrationWarning={true}>
        <ScreenSizeProvider>
          <Topbar />
          {children}
          <Footer />
        </ScreenSizeProvider>
      </body>
    </html>
  );
}
