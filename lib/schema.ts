import { z } from "zod";

const email: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(255, { message: "255文字以内で入力してください" })
  .email({ message: "メールアドレスの形式で入力してください" });

const password: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(8, { message: "8文字以上で入力してください" });

const username: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます" });

export const signupFormSchema = z.object({
  email,
  password,
  username,
});

export const loginFormSchema = z.object({
  email,
  password,
  username,
});

export type SignupFormType = z.infer<typeof signupFormSchema>;
export type LoginFormType = z.infer<typeof loginFormSchema>;
