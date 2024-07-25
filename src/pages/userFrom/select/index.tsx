import { UseFormRegister } from "react-hook-form";
import { Select } from "./styled";
import { Label, Wrapper } from "../styled";
import { IUserEntity } from "../../../interfaces";

interface ISelectItem {
  register: UseFormRegister<IUserEntity>;
}

const SelectItem: React.FC<ISelectItem> = ({ register }) => (
  <Wrapper>
    <Label htmlFor="status">Status</Label>

    <Select id="status" {...register("status")}>
      <option value="" disabled selected>
        Select an option
      </option>

      <option value="active">Active</option>

      <option value="not_active">Not Active</option>
    </Select>
  </Wrapper>
);

export default SelectItem;
