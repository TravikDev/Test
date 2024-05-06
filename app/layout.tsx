import "./globals.css";
import type { Metadata } from "next/types";
import NavList from "./navList";

export const metadata: Metadata = {
  title: "Test Index",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-background-base my-16 gap-[72px] mx-[16px] tablet:mx-[59px] laptop:mx-auto laptop:w-[1248px]">
        <NavList />
        {children}
      </body>
    </html>
  );
}
