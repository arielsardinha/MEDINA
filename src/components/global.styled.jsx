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
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const BackgroundImgFlat = styled("div")`
  width: 100%;
  height: 100px;
  background-image: url("background-flat.jpg") ;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
