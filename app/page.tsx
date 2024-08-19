import { Agenda } from "./components/agenda";
import { CodeOfConduct } from "./components/code-of-conduct";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Hosts } from "./components/host";
import { QUA } from "./components/QUA";
import { DarkSection } from "./components/dark-section";
import { SponsorsAndOrganizers } from "./components/SponsorsAndOrganizers";

export default function Home() {
  return (
    <>
      <Hero />
      <QUA />
      <Agenda />
      <Hosts />
      <CodeOfConduct />
      <SponsorsAndOrganizers />
      <DarkSection />
      <Footer />
    </>
  );
}
