import { Agenda } from "./components/Agenda";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Hosts } from "./components/Hosts";
import { QUA } from "./components/QUA";
import { Speakers } from "./components/Speakers";
import { SponsorsAndOrganizers } from "./components/SponsorsAndOrganizers";

export default function Home() {
  
  return (
    <>
      
      <QUA />
      <Agenda />
      <Hosts />
      <SponsorsAndOrganizers />
      <Footer/>
    </>
  );
}
