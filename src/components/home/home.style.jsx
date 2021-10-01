import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const HomeContainer = styled("header")`
  background-image: url("back-home.jpeg");
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HomeText = styled("div")`
  padding: ${({ theme }) => theme.spacing(5, 0)};
  width: 100%;
  background-color: var(--grey);
  font-size: 4em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    img {
      width: 100px;
    }
  }
`;

export const Title = styled(Typography)`
  font-weight: 600;
  text-shadow: 0.1em 0.1em 0.05em #333;
  color: white;
  text-align: right;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 2em;
  }
`;
