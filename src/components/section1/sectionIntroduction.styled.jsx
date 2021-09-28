import { Container, Box, Typography } from "@material-ui/core";
import { IntroductionContainer, ListUl, Title } from "./sectionIntroduction";

const SectionIntroduction = () => {
  return (
    <IntroductionContainer>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Title variant={"h2"}>
            A HSI é <span> líder global</span>
          </Title>
          <Typography variant={"body2"} color={"white"}>
            em SISTEMAS DE ARMAZENAGEM DE GRÃOS:
            <br /> armazenagem, acondicionamento, movimentação, monitoramento e
            gerenciamento.
          </Typography>
          <ListUl>
            <li>
              <Typography variant={"subtitle1"} color={"white"}>
                Soluções inovadoras
              </Typography>
            </li>
            <li>
              <Typography variant={"subtitle1"} color={"white"}>
                Máximo desempenho e durabilidade
              </Typography>
            </li>
            <li>
              <Typography variant={"subtitle1"} color={"white"}>
                Alta confiabilidade operacional
              </Typography>
            </li>
            <li>
              <Typography variant={"subtitle1"} color={"white"}>
                Manufatura de classe mundial. Processos de excelência, que
                entregam qualidade e segurança para sua aquisição
              </Typography>
            </li>
          </ListUl>
        </Box>
      </Container>
    </IntroductionContainer>
  );
};

export default SectionIntroduction;
