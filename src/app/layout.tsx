import { Inter } from "@next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {
          /* @ts-expect-error Server Component */
          <Provider>{children}</Provider>
        }
      </body>
    </html>
  );
}
