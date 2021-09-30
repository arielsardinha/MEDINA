import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const BoxText = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  max-width: 400px;
`;

export const IconText = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  position: relative;
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing(2, 0)};
  display: flex;
  img {
    position: absolute;
    left: -20px;
    top: -20px;
  }
`;