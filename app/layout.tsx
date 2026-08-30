import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MUKESH MANPOWER | Professional Workforce Solutions",
    template: "%s | MUKESH MANPOWER",
  },
  description:
    "MUKESH MANPOWER provides professional manpower supply, workforce management, industrial staffing, and job opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
