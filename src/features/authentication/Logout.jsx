import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLogout } = useLogout();
  return (
    <ButtonIcon disabled={isLogout} onClick={logout}>
      {!isLogout ? <HiArrowRightEndOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
