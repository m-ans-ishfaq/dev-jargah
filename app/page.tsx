import { AboutUs } from "./components/aboutUs";
import { Agenda } from "./components/agenda";
import { CodeOfConduct } from "./components/codeOfConduct";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Host } from "./components/host";
import { Mentors } from "./components/mentors";
import { RegisterCard } from "./components/registerCard";
import { Speakers } from "./components/speakers";
import { Sponsors } from "./components/sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Agenda />
        <Host />
        <Speakers />
        <Sponsors />
        <Mentors />
        <CodeOfConduct />
        {/*<RegisterCard />*/}
      </main>
      <Footer />
    </>
  );
}
