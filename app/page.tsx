import { Agenda } from "./components/agenda";
import { Footer } from "./components/footer";
import { Hero } from "./components/Hero";
import { Hosts } from "./components/Hosts";
import { QUA } from "./components/QUA";
import { Speakers } from "./components/Speakers";
import { SponsorsAndOrganizers } from "./components/SponsorsAndOrganizers";

export default function Home() {
  
  return (
    <>
      <Hero />
      <QUA />
      <Agenda />
      <Hosts />
      <SponsorsAndOrganizers />
      <Speakers />
      <Footer/>
    </>
  );
}
