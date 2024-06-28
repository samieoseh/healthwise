import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className="bg-[#eff1f3]">{children}</body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
