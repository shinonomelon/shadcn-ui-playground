import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormType } from "@/lib/schema";

export function useLoginForm() {
  const form = useForm<LoginFormType>({
    mode: "onBlur",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormType) {
    console.log(values);
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
