import { ChangeEvent, FormEvent, useState } from "react";

export interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  description: string;
}

export default function UserInfo() {
  const [isActive, setIsActive] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleUserInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
  };

  const handleChangeUserInfo = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setUserInfo({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleUserInfo}
      className="mx-auto mt-16 max-w-xl sm:mt-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg p-8 shadow-xl w-full sm:w-8/12 lg:w-6/12"
    >
      <fieldset className="space-y-6">
        <legend className="text-2xl font-bold text-white mb-6 text-center">
          User Info
        </legend>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-white mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Insert your First Name"
                value={userInfo.firstName}
                onChange={handleChangeUserInfo}
                className="block w-full rounded-lg border-transparent px-4 py-3 text-gray-700 focus:border-purple-500 focus:ring-purple-500 sm:text-base"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-white mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Insert your Last Name"
                value={userInfo.lastName}
                onChange={handleChangeUserInfo}
                className="block w-full rounded-lg border-transparent px-4 py-3 text-gray-700 focus:border-purple-500 focus:ring-purple-500 sm:text-base"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-white mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Insert your Phone"
              value={userInfo.phone}
              onChange={handleChangeUserInfo}
              className="block w-full rounded-lg border-transparent px-4 py-3 text-gray-700 focus:border-purple-500 focus:ring-purple-500 sm:text-base"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insert your Email"
              value={userInfo.email}
              onChange={handleChangeUserInfo}
              className="block w-full rounded-lg border-transparent px-4 py-3 text-gray-700 focus:border-purple-500 focus:ring-purple-500 sm:text-base"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-white mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter your description"
              value={userInfo.description}
              onChange={handleChangeUserInfo}
              className="block w-full rounded-lg border-transparent px-4 py-3 text-gray-700 focus:border-purple-500 focus:ring-purple-500 sm:text-base"
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-white p-3">
              Accept Terms?
            </span>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                  className="sr-only"
                />
                <div
                  className={`block w-10 h-6 rounded-full transition ${
                    isActive ? "bg-green-800" : "bg-red-800"
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                    isActive ? "transform translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
        <div className="mt-10 flex justify-between space-x-4">
          <button
            type="submit"
            className="w-1/2 rounded-lg bg-indigo-950 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Register
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 rounded-lg bg-red-800 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  );
}
