import "./styles/globals.css";
import ThemeWrapper from "./components/ThemeWrapper";
import Cursor from "./components/Cursor/index";
import { LanguageProvider } from "../src/context/LanguageContext";

export const metadata = {
  title: "Portafolio - Moises Rodríguez",
  description: "TKSOHLT - Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ThemeWrapper>
            <Cursor />
            {children}
          </ThemeWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
