
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS DIGITAL | Modern Websites for Your Business",
  description:
    "JS DIGITAL creates modern, responsive websites for businesses, creators and ambitious ideas. Get in touch to discuss your next website project.",
  applicationName: "JS DIGITAL",
  keywords: [
    "JS DIGITAL",
    "website development",
    "web design",
    "business websites",
    "portfolio websites",
    "website developer India",
  ],
  openGraph: {
    title: "JS DIGITAL | Modern Websites for Your Business",
    description:
      "Thoughtful design. Responsive builds. Websites built around your goals.",
    type: "website",
    siteName: "JS DIGITAL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}