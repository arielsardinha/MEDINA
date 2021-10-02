import { Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Background, ListUl, Text, Title } from "./processDryer.style";

const ProcessDrayer = () => {
  return (
    <Background sx={{ py: 15 }} variant={"section"}>
      <Container>
        <Box sx={{ display: "flex" }}>
          <Title sx={{ mr: 2, mb: 3 }} variant={"h3"} color={"white"}>
            Secador de grãos
          </Title>
          <img src="process-dryer.png" alt="PROCESS DRYER" />
        </Box>
        <Text>O melhor secador para você em</Text>
        <ListUl>
          <li>
            <Text>Eficiência energética</Text>
          </li>
          <li>
            <Text>Segurança de operação</Text>
          </li>
          <li>
            <Text>Simplicidade de implantação e menor custo de obra civil</Text>
          </li>
          <li>
            <Text>Reduzida emissão de partículas</Text>
          </li>
          <li>
            <Text>Capacidades de secagem de 20 a 230 ton/h</Text>
          </li>
          <li>
            <Text>Utilizado para secagem de grãos comerciais e sementes</Text>
          </li>
          <li>
            <Text>Grãos mais íntegros, sem cheiro de fumaça</Text>
          </li>
        </ListUl>
      </Container>
    </Background>
  );
};

export default ProcessDrayer;
