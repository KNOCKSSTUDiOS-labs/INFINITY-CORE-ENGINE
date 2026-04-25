import "./globals.css";
import UserBar from "./components/UserBar";

export const metadata = {
  title: "Hollywood Imaging Studio",
  description: "Infinity Core Engine",
  metadataBase: new URL("https://hollywoodimaging.studio"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserBar />
        {children}
      </body>
    </html>
  );
}
