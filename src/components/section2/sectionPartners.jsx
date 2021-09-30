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
              <img src="" alt="AGCO" />
              <img src="" alt="challenger" />
              <img src="" alt="FENDT" />f
              <img src="" alt="GSI" />
              <img src="" alt="MAGSEY" />
              <img src="" alt="Valtra" />
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
              <img src="" alt="AGCO" />
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
