import { Typography, Fab } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { BoxFooter } from "./footer.style";
import { Container } from "./footer.style";
import { WhatsApp, Instagram, Email } from "@material-ui/icons";

const Footer = () => {
  return (
    <BoxFooter>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img src="arco-norte.jpg" alt="AGCO" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <a
                href={"https://api.whatsapp.com/send?phone=5563984198171"}
                target="_blank"
                rel="noreferrer"
              >
                <Fab sx={{ mr: 2 }}>
                  <WhatsApp color={"white"} fontSize={"large"} />
                </Fab>
              </a>

              <a
                href={"https://api.whatsapp.com/send?phone=5563984198171"}
                target="_blank"
                rel="noreferrer"
              >
                <Typography color={"white"}>+55 63 98419-8171</Typography>
              </a>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
              <a
                href={
                  "https://www.instagram.com/arconorterepresentacoes/?hl=pt-br"
                }
                target="_blank"
                rel="noreferrer"
              >
                <Fab sx={{ mr: 2 }}>
                  <Instagram color={"white"} fontSize={"large"} />
                </Fab>
              </a>
              <a
                href={
                  "https://www.instagram.com/arconorterepresentacoes/?hl=pt-br"
                }
                target="_blank"
                rel="noreferrer"
              >
                <Typography color={"white"}>instagram</Typography>
              </a>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <a
                href="mailto:medina@arconorte.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Fab sx={{ mr: 2 }}>
                  <Email color={"white"} fontSize={"large"} />
                </Fab>
              </a>
              <a
                href="mailto:medina@arconorte.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Typography color={"white"}>medina@arconorte.com.br</Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </BoxFooter>
  );
};

export default Footer;
