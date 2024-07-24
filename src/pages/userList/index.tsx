import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "../../hooks/useUserStore";
import { IUserEntity } from "../../interfaces";

const cols = ["Name", "Username", "Email", "Phone", "Status"];

const UserList: React.FC = () => {
  const { users } = useUsersStore();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/create")}>Add New Item</button>

      <table>
        <thead>
          <tr>
            {cols.map((name) => (
              <th>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map((user: IUserEntity) => (
            <tr
              key={user.userName}
              onClick={() => navigate(`/edit/${user.userName}`)}
            >
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.status && (
                  <span className={`badge ${user.status}`}>{user.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
