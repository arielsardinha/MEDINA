import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/system";

export const Background = styled(Box)`
  background-image: url("process-dryer.jpeg");
  height: 100vh;
`;

export const ListUl = styled("ul")`
  color: ${({ theme }) => theme.palette.primary.main};
  li {
    margin: ${({ theme }) => theme.spacing(2, 0)};
  }
`;

export const Text = styled(Typography)`
  color: #fff;
  font-weight: 500;
`;
