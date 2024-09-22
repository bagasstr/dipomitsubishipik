import Navbar from "@/component/organisms/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dipo Mistubishi Pik",
  description:
    "Dealer Resmi Mistubishi. Temukan mobil Mitsubishi impian Anda di sini! Kami menawarkan berbagai pilihan mobil baru dengan harga terbaik dan promo menarik. Dapatkan layanan sales yang profesional dan terpercaya.",
  keywords:
    "Mitsubishi, Dealer Mitsubishi, Dealer Mitsubishi Jakarta, Harga Mobil, Mitsubishi Xpander, Mitsubishi Pajero Sport, Mitsubishi Triton, Mobil Keluarga, Mobil SUV, Mobil Pick Up, Promo Mobil, Cicilan Mobil, Harga Mobil",
  openGraph: {
    title: "Dipo Mistubishi Pik",
    description:
      "Dealer Resmi Mitsubishi. Temukan mobil Mitsubishi impian Anda di sini!",
    url: "https://dipomitsubishi.com/",
    siteName: "Dipo Mistubishi Pik",
    images: [
      {
        url: "https://dipomitsubishi.com/",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },

  verification: {
    google: "googled81ade8dd415c7d1.html",
  },
  authors: [
    { name: "Bagas Satrio", url: "https://linkedin.com/id/bagasstr/" },
    { name: "Dipo Mistubishi Pik", url: "https://dipomitsubishi.com/" },
  ],
  category: "Mitsubishi, Pajero Sport, Triton, Xpander Cross, Xforce ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
