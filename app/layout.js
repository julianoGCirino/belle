import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cartão de Visita Virtual",
  description: "Grupo de crescimento para mulheres",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

    <meta property="og:title" content="Bellecler" />
    <meta property="og:description" content="Grupo de crescimento para mulheres" />
    <meta property="og:image" content="https://m.facebook.com/izabelle.safreire/" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
