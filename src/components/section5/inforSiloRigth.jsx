import { Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import {
  BackgroundText,
  ImgRigth,
  ListUl,
  Section,
  Text,
  Title,
} from "./infoSiloLeft.style";

const InfoSiloRigth = () => {
  return (
    <Section>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            position: "relative",
          }}
        >
          <div>
            <Title variant={"h4"} sx={{ mb: 2 }} color={"white"}>
              Silo Fundo Cônico
              <br /> <span>até 17 mil sacas</span>
            </Title>
            <ListUl>
              <li>
                <Text color={"white"}>
                  utilizado para armazenagem temporária de grãos, como regulador
                  de fluxo e para expedição rodoviária e ferroviária
                </Text>
              </li>
              <li>
                <Text color={"white"}>
                  disponível nas versões de 45 e 60 graus
                </Text>
              </li>
            </ListUl>
          </div>
          <ImgRigth data-aos="fade-right" src="img-silo.jpeg" alt="" />
        </Box>
      </Container>
    </Section>
  );
};

export default InfoSiloRigth;
