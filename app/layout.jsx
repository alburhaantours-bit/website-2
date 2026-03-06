import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://wnyrenovation.com"),
  alternates: {
    canonical: "/",
  },
};

  title: {
    default: "WNY Renovations & Repairs LLC",
    template: "%s | WNY Renovations & Repairs LLC",
  },

  description:
    "Kitchen renovation, bathroom remodeling, tile & flooring, drywall & painting, and handyman services in Buffalo NY and surrounding suburbs.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "WNY Renovations & Repairs LLC",
    description:
      "Kitchen and bathroom renovations, flooring, drywall and handyman services in Buffalo, NY.",
    url: "https://wnyrenovation.com",
    siteName: "WNY Renovations & Repairs LLC",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
