import { styled } from "@material-ui/core/styles";

export const ContainerSection = styled("section")`
  padding: ${({ theme }) => theme.spacing(15, 0, 0, 0)};
`;

export const BoxIconPatners = styled("figure")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    margin: ${({ theme }) => theme.spacing(0, 1)};
  }
`;
