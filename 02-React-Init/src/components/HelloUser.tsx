export interface UserInfoA {
  fullName: string;
  profession: string;
  hobby: string;
}

type UserInfoProps = {
  devUser: UserInfoA;
}

export const HelloUser: React.FC<UserInfoProps> = ({ devUser }) => {
  const { fullName, profession, hobby } = devUser;
  return (
    <article className="w-60 h-60 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 m-8 p-4 flex border-0 rounded-full shadow-2xl transform transition-transform duration-500 hover:scale-105">
      <section className="relative w-full h-full rounded-full overflow-hidden">
        <section className="absolute w-full h-full bg-white bg-opacity-90 text-gray-900 flex flex-col justify-center items-center p-6 space-y-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">{fullName}</h1>
          <p className="text-xl font-medium">{profession}</p>
          <p className="text-base font-light">{hobby}</p>
        </section>
      </section>
    </article>
  );
};
