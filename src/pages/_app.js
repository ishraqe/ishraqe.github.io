import "@/styles/globals.scss";
import { Nunito_Sans } from "@next/font/google";

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"]
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${nunito_Sans.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
