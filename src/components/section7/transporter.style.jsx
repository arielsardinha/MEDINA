import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/system";

export const BoxTexts = styled("section")`
  padding: ${({ theme }) => theme.spacing(10, 0)};
  background-color: var(--grey);
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
`;
