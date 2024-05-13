import "../shared/styles/globals.css";
import type { Metadata } from "next/types";
import NavList from "./components/navigation/navList";

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
