import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { HomeContainer, HomeText, Title as TitleHome } from "./home.style";
import { Title } from "../global.styled";

const Home = () => {
  return (
    <>
      <HomeText>
        <Container>
          <Title variant={"h1"} align="right" color={"primary"}>
            Armazenagem
          </Title>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography variant={"h2"} align="right" color={"secondary"}>
              de grãos
            </Typography>
            <img src="GSI.png" alt="HSI" />
          </Box>
        </Container>
      </HomeText>
      <HomeContainer>
        <Container>
          <TitleHome variant={"h2"}>
            Máxima eficiência,
            <br /> durabilidade e<br /> confiabilidade
          </TitleHome>
        </Container>
      </HomeContainer>
    </>
  );
};

export default Home;
