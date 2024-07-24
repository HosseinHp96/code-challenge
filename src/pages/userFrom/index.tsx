import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useUsersStore } from "../../hooks/useUserStore";
import { IUserEntity } from "../../interfaces";
import { userSchema } from "../../constants";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Username</label>
        <input {...register("userName")} />
        <p>{errors.userName?.message}</p>
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Phone</label>
        <input {...register("phone")} />
        <p>{errors.phone?.message}</p>
      </div>

      <div>
        <label>Status</label>
        <select {...register("status")}>
          <option value="">Select status</option>
          <option value="active">Active</option>
          <option value="not_active">Not Active</option>
        </select>
      </div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default UserForm;
