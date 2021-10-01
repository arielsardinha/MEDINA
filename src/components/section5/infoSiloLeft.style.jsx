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
  ${({ theme }) => theme.breakpoints.down("md")} {
    img {
      display: none;
    }
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
  max-width: 500px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
  }
`;

export const Text = styled(Typography)``;

export const Title = styled(Typography)`
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 2em;
  }
`;