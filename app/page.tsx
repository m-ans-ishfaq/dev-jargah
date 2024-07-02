import { AboutUs } from "./components/aboutUs";
import { Agenda } from "./components/agenda";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Host } from "./components/host";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Agenda />
        <Host />
      </main>
    </>
  );
}
