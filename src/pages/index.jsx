import { useEffect } from "react";
import Head from "next/head";
import { BackgroundImgFlat, Container } from "../components/global.styled";
import Home from "../components/home/home";
import SectionIntroduction from "../components/section1/sectionIntroduction";
import SectionPartners from "../components/section2/sectionPartners";
import SectionSolutions from "../components/section3/sectionSolutions";
import SectionStorage from "../components/section4/storage";
import InfoSiloLeft from "../components/section5/infoSiloLeft";
import InfoSiloRigth from "../components/section5/inforSiloRigth";
import ProcessDrayer from "../components/section6/processDryer";
import Transporter from "../components/section7/transporter";
import Footer from "../components/footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Armazenagem de grãos GSI</title>
        <meta name="description" content="Armazenagem de grãos GSI" />
      </Head>
      <Container>
        <main>
          <Home />
          <SectionIntroduction />
          <SectionPartners />
          <BackgroundImgFlat />
          <SectionSolutions />
          <BackgroundImgFlat />
          <SectionStorage />
          <InfoSiloLeft />
          <InfoSiloRigth />
          <BackgroundImgFlat />
          <ProcessDrayer />
          <BackgroundImgFlat />
          <Transporter />
          <Footer />
        </main>
      </Container>
    </>
  );
}
