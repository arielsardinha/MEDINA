import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { BoxFooter } from "./footer.style";
import { Container } from "./footer.style";

const Footer = () => {
  return (
    <BoxFooter>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="agco.png" alt="AGCO" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography color={"white"}>www.gsibrasil.ind.br</Typography>
            <Typography color={"white"}>
              gsi-brasil.contato@agcocorp.com
            </Typography>
            <Typography color={"white"}>54.3342.7500</Typography>
          </Box>
        </Box>
      </Container>
    </BoxFooter>
  );
};

export default Footer;
