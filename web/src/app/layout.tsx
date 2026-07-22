import type { Metadata } from "next";
import { Topbar, TransactionsLoader } from "@/components";
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
        <TransactionsLoader />
        {children}
      </body>
    </html>
  );
}
