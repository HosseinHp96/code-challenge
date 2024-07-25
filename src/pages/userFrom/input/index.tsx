import { FieldValues, UseFormRegister } from "react-hook-form";
import { IUserEntity } from "../../../interfaces";
import { Input, Error } from "./styled";
import Utils from "../../../utils";
import { Label, Wrapper } from "../styled";

interface IInputItem<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: keyof T;
  error?: string;
}

const InputItem: React.FC<IInputItem<IUserEntity>> = (params) => {
  const { register, error, name } = params;

  return (
    <Wrapper>
      <Label htmlFor={name}>{Utils.capitalizeFirstLetter(name)}</Label>

      <Input id={name} {...register(name)} />

      <Error>{error}</Error>
    </Wrapper>
  );
};

export default InputItem;
