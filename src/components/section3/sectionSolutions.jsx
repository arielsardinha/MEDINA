import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { BoxText, IconText } from "./sectionSolutions.style";
import { Title, Text } from "../global.styled";

const SectionSolutions = () => {
  return (
    <Box sx={{ my: 15 }}>
      <Container>
        <Title variant={"h2"}>
          Soluções completas em
          <br /> <span>sistemas de armazenagem de grãos</span>
        </Title>
        <Box
          sx={{
            display: "flex",
            flexWrap: "whap",
            my: 5,
            justifyContent: "space-between",
          }}
        >
          <BoxText>
            <Text sx={{ mr: 1 }}>
              Sistemas de alto desempenho, que agregam maior valor para os
              grãos. A número 1 do mundo é a sua melhor opção para ampliar a
              competitividade e a rentabilidade.
            </Text>
          </BoxText>
          <BoxText>
            <Text sx={{ ml: 1 }}>
              A GSI é a escolha técnica certa, especializada em atender e
              entender as necessidades dos mais exigentes produtores.
            </Text>
          </BoxText>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconText>
            <img src="" alt="icon" />
            <Text>projetos customizados conforme necessidade do cliente</Text>
          </IconText>
          <IconText>
            <img src="" alt="icon" />
            <Text>entrega da solução mecânica completa</Text>
          </IconText>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconText>
            <img src="" alt="icon" />
            <Text>
              otimização do investimento: layout do projeto, disposição e
              modelos de equipamentos que garantam qualidade e maior eficiência
            </Text>
          </IconText>
          <IconText>
            <img src="" alt="icon" />
            <Text>tecnologia que maximiza os resultados da produção</Text>
          </IconText>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSolutions;
