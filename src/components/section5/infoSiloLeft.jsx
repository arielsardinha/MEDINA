import { Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { ImgLeft, ListUl, Section, Text, Title } from "./infoSiloLeft.style";

const InfoSiloLeft = () => {
  return (
    <Section>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <ImgLeft data-aos="fade-left" src="img-silo.jpeg" alt="" />
          <div>
            <Title variant={"h4"} sx={{ mb: 2 }} color={"white"}>
              Silo Fundo Plano
              <br /> <span>até 300 mil sacas</span>
            </Title>
            <ListUl>
              <li>
                <Text color={"white"}>
                  design único, que confere melhor segurança e maior agilidade
                  de montagem
                </Text>
              </li>
              <li>
                <Text color={"white"}>
                  materiais construtivos com maior resistência mecânica
                </Text>
              </li>
              <li>
                <Text color={"white"}>
                  projeto atende as normas de segurança NR12
                </Text>
              </li>
            </ListUl>
          </div>
        </Box>
      </Container>
    </Section>
  );
};

export default InfoSiloLeft;
