import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/system";

export const BoxTexts = styled("section")`
  padding: ${({ theme }) => theme.spacing(10, 0)};
  background: rgb(0, 48, 50);
  background: linear-gradient(
    0deg,
    rgba(0, 48, 50, 1) 0%,
    rgba(47, 48, 49, 1) 100%
  );
`;

export const Text = styled(Typography)`
  color: #fff;
`;

export const ListUl = styled("ul")`
  color: ${({ theme }) => theme.palette.primary.main};
  li {
    margin: ${({ theme }) => theme.spacing(2, 0)};
  }
`;

export const BoxTextLeft = styled(Box)`
  max-width: 600px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ theme }) => theme.spacing(5, 0)};
  }
`;

export const Title = styled(Typography)`
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 2em;
  }
`;
