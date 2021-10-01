import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export const Title = styled(Typography)`
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 2em;
  }
`;
