import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const IntroductionContainer = styled("section")`
  background-color: var(--grey);
  padding: ${({ theme }) => theme.spacing(15, 0)};
`;

export const ListUl = styled("ul")`
  margin: ${({ theme }) => theme.spacing(4, 0)};
  li {
    color: ${({ theme }) => theme.palette.secondary.main};
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
