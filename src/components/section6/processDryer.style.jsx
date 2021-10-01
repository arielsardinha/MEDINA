import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/system";

export const Background = styled(Box)`
  background-image: url("process-dryer.jpeg");
  height: 100vh;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    img {
      display: none;
    }
  }
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

export const Title = styled(Typography)`
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 2em;
  }
`;
