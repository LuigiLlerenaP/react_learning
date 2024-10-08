import { useForm } from "../hooks/useForm";
interface FormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SimpleFormWithCustomHook = () => {
  const { formState, handleInputChange } = useForm<FormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = formState;
  return (
    <section className="flex flex-col items-center justify-center mt-8 p-6 bg-white rounded-lg shadow-xl">
      <form action="" className="w-full max-w-lg">
        <fieldset className="mb-6">
          <legend className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
            Personal Information
          </legend>

          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-left text-lg font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              value={username}
              onChange={handleInputChange}
              type="text"
              id="username"
              name="username"
              placeholder="Insert your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-left text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              value={email}
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              placeholder="Insert your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-left text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              value={password}
              onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
              placeholder="Insert your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-left text-lg font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={handleInputChange}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </fieldset>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};
