import type { Metadata } from "next";
import { inter, notoSansJP } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "wizamari1138",
  description: "ウィザマリのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        {children}
      </body>
    </html>
  );
}
