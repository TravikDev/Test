import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Description",
};

export default function SecurityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="main-layout">{children}</main>;
}
