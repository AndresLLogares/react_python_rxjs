import { Wrapper } from "../../styles/layoutStyled";

export const Layout = (props: any) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};
