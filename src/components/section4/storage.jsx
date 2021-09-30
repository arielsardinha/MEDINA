import { Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Title, Text } from "../global.styled";

const SectionStorage = () => {
  return (
    <Box sx={{ my: 15 }}>
      <Container>
        <Title variant={"h2"}>
          Silos de <br /> <span> armazenagem</span>
        </Title>
        <Text>
          A tecnologia líder mundial está presente em uma ampla linha de
          equipamentos para as mais diversas aplicações na armazenagem comercial
          ou em fazenda.
        </Text>
        <Text>
          Produzidos em chapas de aço galvanizado, os silos GSI possuem alta
          robustez e durabilidade, resultado de décadas de pesquisa e
          desenvolvimento, sob as mais severas condições climáticas e sob os
          requisitos de qualidade dos clientes mais exigentes.
        </Text>
      </Container>
    </Box>
  );
};

export default SectionStorage;
