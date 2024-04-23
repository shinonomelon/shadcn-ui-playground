import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema, SignupFormType } from "@/lib/schema";

export function useSignupForm() {
  const form = useForm<SignupFormType>({
    mode: "onBlur",
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  function onSubmit(values: SignupFormType) {
    console.log(values);
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
