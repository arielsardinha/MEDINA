import { Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { BoxIconPatners, ContainerSection } from "./sectionPartners.style";
import { Text } from "../global.styled";

const SectionPartners = () => {
  return (
    <ContainerSection>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ my: 5 }}>
            <BoxIconPatners>
              <img src="agco-back.png" alt="AGCO" />
              <img src="chellenger.png" alt="challenger" />
              <img src="fendt.png" alt="FENDT" />
              <img src="massey.png" alt="Valtra" />
              <img src="GSI.png" alt="GSI" />
              <img src="valtra.png" alt="MAGSEY" />
            </BoxIconPatners>
            <Text sx={{ mt: 2 }}>
              A GSI integra o grupo de marcas líderes globais da AGCO, que tem
              como objetivo desenvolver, fabricar e distribuir soluções efetivas
              e tecnológicas que ampliem a qualidade e o potencial produtivo do
              agronegócio mundial, para alimentar o mundo.
            </Text>
          </Box>
          <Box sx={{ my: 5 }}>
            <BoxIconPatners>
              <img src="agco-finance.png" alt="AGCO" />
            </BoxIconPatners>
            <Text sx={{ mt: 2 }}>
              A GSI possui um banco próprio, especializado e exclusivo, para
              oferecer as melhores condições para o seu investimento e facilitar
              a aquisição de equipamentos e projetos GSI, com agilidade,
              flexibilidade e confiança.
            </Text>
          </Box>
        </Box>
      </Container>
    </ContainerSection>
  );
};

export default SectionPartners;
