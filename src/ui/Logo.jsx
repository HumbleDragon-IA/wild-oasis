import styled from "styled-components";
import useDarkModeStore from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const isDarkModeOn = useDarkModeStore((state) => state.isDarkModeOn);
  return (
    <StyledLogo>
      <Img src={`/logo-${isDarkModeOn ? "dark" : "light"}.png`} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
