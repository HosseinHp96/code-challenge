import { Button } from "./styled";

interface CustomBtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  onClick,
  children,
  disabled = false,
  type = "button",
}) => {
  return (
    <Button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
