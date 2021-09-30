import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Section = styled("section")`
  background-color: var(--grey);
  position: relative;
  padding: ${({ theme }) => theme.spacing(5, 0)};
  margin: ${({ theme }) => theme.spacing(15, 0)};
  img {
    max-width: 300px;
    position: absolute;
    top: -100px;
    padding-bottom: 50px;
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const ImgLeft = styled("img")`
  left: 0;
`;

export const ImgRigth = styled("img")`
  right: 0;
`;

export const ListUl = styled("ul")`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Text = styled(Typography)``;
