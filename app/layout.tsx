import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "利米诺 · Agent人格引擎",
  description: "利米诺 BP · Agent 人格引擎演示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
