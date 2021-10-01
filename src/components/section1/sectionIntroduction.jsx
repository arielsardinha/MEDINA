import { Container, Box } from "@material-ui/core";
import {
  IntroductionContainer,
  ListUl,
  Text,
  Title,
} from "./sectionIntroduction.styled";

const SectionIntroduction = () => {
  return (
    <IntroductionContainer>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Title sx={{ mb: 3 }} variant={"h2"}>
            A HSI é <span> líder global</span>
          </Title>
          <Text variant={"body2"} color={"primary"}>
            em SISTEMAS DE ARMAZENAGEM DE GRÃOS:
            <br /> armazenagem, acondicionamento, movimentação, monitoramento e
            gerenciamento.
          </Text>
          <ListUl>
            <li>
              <Text variant={"subtitle1"} color={"white"}>
                Soluções inovadoras
              </Text>
            </li>
            <li>
              <Text variant={"subtitle1"} color={"white"}>
                Máximo desempenho e durabilidade
              </Text>
            </li>
            <li>
              <Text variant={"subtitle1"} color={"white"}>
                Alta confiabilidade operacional
              </Text>
            </li>
            <li>
              <Text variant={"subtitle1"} color={"white"}>
                Manufatura de classe mundial. Processos de excelência, que
                entregam qualidade e segurança para sua aquisição
              </Text>
            </li>
          </ListUl>
        </Box>
      </Container>
    </IntroductionContainer>
  );
};

export default SectionIntroduction;
