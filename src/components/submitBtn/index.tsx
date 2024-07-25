import { Button } from "./styled";

interface SubmitBtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <Button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
