import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Title } from "../global.styled";
import { ListUl } from "../section6/processDryer.style";
import { BoxTexts, Text, BoxTextLeft } from "./transporter.style";
const Transporter = () => {
  return (
    <>
      <Container>
        <Box sx={{ py: 5 }}>
          <Title variant={"h3"} align={"rigth"}></Title>
        </Box>
      </Container>
      <BoxTexts>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BoxTextLeft sx={{ display: "flex", flexDirection: "column" }}>
              <Text align={"rigth"}>
                Os sistemas transportadores de grãos da GSI são desenvolvidos
                para as mais exigentes aplicações, resistem às mais severas
                condições climáticas e garantem a melhor relação
                custo-benefício.
              </Text>
              <Text align={"rigth"} sx={{ mt: 3 }}>
                materiais e projeto resistentes as mais severas condições
                climáticas linha completa, capacidades de 40 a 400 ton/h
                projetos de acordo com as normas e legislações vigentes design e
                projeto de construção robusto
              </Text>
            </BoxTextLeft>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant={"h6"} color={"white"}>
                Modelos:
              </Typography>
              <ListUl>
                <li>
                  <Text>elevadores de caneca</Text>
                </li>
                <li>
                  <Text>transportadores de corrente (Redler)</Text>
                </li>
                <li>
                  <Text>correias transportadoras</Text>
                </li>
                <li>
                  <Text>transportadores helicoidais</Text>
                </li>
                <li>
                  <Text>acessórios em geral</Text>
                </li>
              </ListUl>
            </Box>
          </Box>
        </Container>
      </BoxTexts>
    </>
  );
};

export default Transporter;
