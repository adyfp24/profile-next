import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ady Firdaus Pratama — Full Stack Developer",
  description: "Portfolio of Ady Firdaus Pratama, an Information Technology student and junior full stack developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
