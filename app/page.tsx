import { Agenda } from "./components/agenda";
import { CodeOfConduct } from "./components/code-of-conduct";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Hosts } from "./components/host";
import { QUA } from "./components/QUA";
import { CommunityPartners } from "./components/community-partners";
import { Speakers } from "./components/speakers";
import { DarkSection } from "./components/ui/section";
import { MediaPartners } from "./components/media-partners";
import { Sponsors } from "./components/sponsors";
import { Organizers } from "./components/organizers";

export default function Home() {
  return (
    <>
      <Hero />
      <QUA />
      <Agenda />
      <Hosts />
      <Sponsors />
      <Organizers />
      <Speakers />
      <CodeOfConduct />
      <DarkSection>
        <MediaPartners />
        <CommunityPartners />
      </DarkSection>
      <Footer />
    </>
  );
}
