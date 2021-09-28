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
  width: 100%;
  background-color: var(--grey);
  font-size: 4em;
`;
