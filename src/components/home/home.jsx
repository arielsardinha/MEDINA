import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { HomeContainer, HomeText } from "./home.style";

const Home = () => {
  return (
    <>
      <HomeText>
        <Container>
          <Typography variant={"h1"} align="right" color={"primary"}>
            Armazenagem
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography variant={"h2"} align="right" color={"secondary"}>
              de grãos
            </Typography>
            <img src="" alt="HSI" />
          </Box>
        </Container>
      </HomeText>
      <HomeContainer>
        <Container>
          <Typography
            sx={{ fontWeight: "bold", textShadow: "0.1em 0.1em 0.05em #333" }}
            variant={"h2"}
            align={"right"}
            color={"white"}
          >
            Máxima eficiência,
            <br /> durabilidade e<br /> confiabilidade
          </Typography>
        </Container>
      </HomeContainer>
    </>
  );
};

export default Home;
