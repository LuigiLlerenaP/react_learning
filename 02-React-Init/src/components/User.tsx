export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

type UserProps = {
  user: User;
};

export const User = ({ user }: UserProps) => {
  return (
    <div className="bg-gray-300 p-5 rounded text-zinc-600 font-mono">
      <p>React can't pass directly the object in the JSX</p>
      <code>{JSON.stringify(user)}</code>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
    </div>
  );
};
