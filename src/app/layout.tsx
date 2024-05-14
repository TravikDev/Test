import "@/src/shared/styles/globals.css";
import { NavList } from "./_components/navigation/navList";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Index Page",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-[16px] my-16 flex justify-center gap-[72px] bg-background-base text-white tablet:mx-[59px] laptop:mx-auto laptop:w-[1248px]">
        <NavList />
        <main className="main-layout">{children}</main>
      </body>
    </html>
  );
}
