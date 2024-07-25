import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/users": "List Item",
  "/create": "Create New Item",
  "/edit/:userName": "Edit Item",
  "/fibonacci": "Fibonacci",
  "/collatz": "Collatz",
};

const Title = styled.h1`
  text-align: center;
  padding: 2rem 0;
`;

const PageTitle: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return <Title>{titles[currentPath]}</Title>;
};

export default PageTitle;
