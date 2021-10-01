import { styled } from "@material-ui/core/styles";
import { Container as ContainerMui } from "@material-ui/core";

export const BoxFooter = styled("footer")`
  background-color: var(--grey);
  padding: ${({ theme }) => theme.spacing(15, 0)};

  img {
    max-width: 400px;
  }
`;

export const Container = styled(ContainerMui)``;
