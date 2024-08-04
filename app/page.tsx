import { Agenda } from "./components/agenda";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Hosts } from "./components/Hosts";
import { QUA } from "./components/QUA";
import { Speakers } from "./components/speakers";
import { SponsorsAndOrganizers } from "./components/SponsorsAndOrganizers";

export default function Home() {
  
  return (
    <>
      <Hero />
      <QUA />
      <Agenda />
      <Hosts />
      <SponsorsAndOrganizers />
      <Footer/>
    </>
  );
}
