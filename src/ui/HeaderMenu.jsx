import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import Button from "./Button";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToogle from "./DarkModeToogle";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 1.4rem;

  justify-content: flex-end;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <Button onClick={() => navigate("/account")}>
          <HiOutlineUser></HiOutlineUser>
        </Button>
      </li>
      <li>
        <DarkModeToogle></DarkModeToogle>
      </li>
      <li>
        <Logout></Logout>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
