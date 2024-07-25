import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useUsersStore } from "../../hooks/useUserStore";
import { IUserEntity } from "../../interfaces";
import { userSchema } from "../../constants";
import { Container } from "../../styles";
import InputItem from "./input";
import SelectItem from "./select";
import { SubmitBtn } from "../../components";
import { Form, ItemsWrapper } from "./styled";
import Divider from "../../styles/divider";

const UserForm: React.FC = () => {
  const { addUser, updateUser, users } = useUsersStore();
  const navigate = useNavigate();
  const { userName } = useParams<{ userName: string }>();

  const user = users.find((u) => u.userName === userName);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserEntity>({
    resolver: yupResolver(userSchema),
    defaultValues: user || {
      name: "",
      userName: "",
      email: "",
      phone: "",
      status: null,
    },
  });

  const onSubmit = (data: IUserEntity) => {
    if (user) {
      updateUser(data);
    } else {
      addUser(data);
    }
    navigate("/");
  };

  // Helper function for safe error access
  const getErrorMessage = (
    errors: FieldErrors<IUserEntity>,
    key: keyof IUserEntity
  ) => {
    return errors[key]?.message;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ItemsWrapper>
          {["name", "userName", "email", "phone"].map((item) => (
            <InputItem
              name={item as keyof IUserEntity}
              register={register}
              error={getErrorMessage(errors, item as keyof IUserEntity)}
            />
          ))}
        </ItemsWrapper>

        <Divider />

        <ItemsWrapper>
          <SelectItem register={register} />
        </ItemsWrapper>

        <Divider />

        <SubmitBtn>Submit</SubmitBtn>
      </Form>
    </Container>
  );
};

export default UserForm;
