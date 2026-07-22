import type { Metadata } from "next";
import { Topbar } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мои финансы",
  description: "Небольшое приложение для учета личных финансов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
