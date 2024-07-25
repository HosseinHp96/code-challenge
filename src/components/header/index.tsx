import { HeaderContainer, HeaderLink } from "./styled";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <HeaderContainer>
      <HeaderLink to="/users" isActive={currentPath === "/users"}>
        List item
      </HeaderLink>

      <HeaderLink to="/fibonacci" isActive={currentPath === "/fibonacci"}>
        Fibonacci
      </HeaderLink>

      <HeaderLink to="/collatz" isActive={currentPath === "/collatz"}>
        Collatz
      </HeaderLink>
    </HeaderContainer>
  );
};

export default Header;
