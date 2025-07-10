import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import useDarkModeStore from "../context/DarkModeContext";

function DarkModeToggle() {
  const isDarkModeOn = useDarkModeStore((state) => state.isDarkModeOn);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  function handleClick() {
    const mode = isDarkModeOn === "light-mode" ? "dark-mode" : "light-mode";
    toggleDarkMode(mode);
    localStorage.setItem("mode", mode);
  }

  return (
    <ButtonIcon onClick={handleClick}>
      {isDarkModeOn === "light-mode" && <HiOutlineMoon />}
      {isDarkModeOn === "dark-mode" && <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
