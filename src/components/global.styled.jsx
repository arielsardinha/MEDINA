import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Container = styled("div")`
  max-width: 1400px;

`;

export const Title = styled(Typography)`
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 0.8em;
  }
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const BackgroundImgFlat = styled("div")`
  width: 100vw;
  height: 100px;
  background-image: url("back-flet.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
