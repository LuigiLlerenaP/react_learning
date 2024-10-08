import { useState } from "react";
import { CounterApp } from "./components/CounterApp";
import Hello from "./components/Hello";
import { HelloUser, UserInfoA } from "./components/HelloUser";
import Sum from "./components/Sum";
import { User } from "./components/User";
import UserInfo from "./components/UserInfo";

const firstName: string = "Luigi";

const UserAdmin: User = {
  firstName: "Luigi",
  lastName: "Llerena",
  age: 24,
};
const DevUser: UserInfoA = {
  fullName: "Luigi Llerena",
  profession: "Developer Software",
  hobby: "Video Games",
};

// eslint-disable-next-line react-refresh/only-export-components
export enum CountOperations {
  Reset = "Reset",
  Decrement = "Decrement",
  Increment = "Increment",
}

export type CountOperation =
  | CountOperations.Increment
  | CountOperations.Decrement
  | CountOperations.Reset;

export const App = () => {
  const [count, setCount] = useState(0);

  const handlerCounter = (operation: CountOperation) => {
    if (operation === CountOperations.Increment) {
      setCount((prevCount) => prevCount + 1);
      return;
    }
    if (operation === CountOperations.Decrement) {
      setCount((prevCount) => prevCount - 1);
      return;
    }
    if (operation === CountOperations.Reset) {
      setCount(0);
      return;
    }
  };

  return (
    <div className="flex flex-col bg-slate-900 justify-center items-center h-full">
      <Hello firstName={firstName} />
      <User user={UserAdmin} />
      <Sum />
      <UserInfo />
      <HelloUser devUser={DevUser} />
      <CounterApp value={count} handlerCounter={handlerCounter} />
    </div>
  );
};
