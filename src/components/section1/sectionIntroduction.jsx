import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const IntroductionContainer = styled("section")`
  background-color: var(--grey);
  padding: ${({ theme }) => theme.spacing(15, 0)};
`;

export const Title = styled(Typography)`
  color: #fff;

  span {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const ListUl = styled("ul")`
  margin: ${({ theme }) => theme.spacing(4, 0)};
  li {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;