import { ChangeEvent, useState } from "react";

// Define a generic type for the form state
type FormState<T> = {
  [key in keyof T]: string;
};

// Define the type for the hook's return value
interface UseFormReturn<T> {
  formState: FormState<T>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useForm = <T>(initialForm: T): UseFormReturn<T> => {
  const [formState, setFormState] = useState<FormState<T>>(
    initialForm as FormState<T>
  );

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    handleInputChange,
  };
};
