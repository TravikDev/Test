import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Description",
};

export default function SecurityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="main-layout">{children}</main>;
}
