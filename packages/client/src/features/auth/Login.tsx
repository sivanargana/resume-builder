import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useGoogleLogin } from "@react-oauth/google";

import { api } from "@/axios";
import axios from "axios";

type LoginFormValues = {
  email: string;
  password: string;
};

export function Login({ className, ...props }: React.ComponentProps<"div">) {
  let navigate = useNavigate();
  const loginWithEmail = useMutation({
    mutationFn: (obj) => api.post("auth/login", obj),
    onSuccess: (data) => {
      afterLogin(data);
    },
  });
  const loginWithGoogle = useMutation({
    mutationFn: (obj) => api.post("auth/login-with-google", obj),
    onSuccess: (data: any) => {
      afterLogin(data);
    },
  });

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "alice@example.com",
      password: "Password@123",
    },
  });

  const afterLogin = (data: any) => {
    localStorage.setItem("token", data?.data?.token);
    localStorage.setItem("role", data?.data?.role);
    if (localStorage.getItem("role") == "USER") {
      navigate("/account/profile");
    }
    if (localStorage.getItem("role") == "ADMIN") {
      navigate("/admin");
    }
  };

  const onSubmit = form.handleSubmit((values: any) => {
    loginWithEmail.mutate({ provider: "EMAIL", ...values });
  });
  const login = useGoogleLogin({
    onSuccess: (response: any) => {
      axios.get("https://www.googleapis.com/oauth2/v3/userinfo", { headers: { Authorization: `Bearer ${response.access_token}` } }).then((data) => {
        loginWithGoogle.mutate({ provider: "GOOGLE", ...data.data } as any);
      });
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input {...field} id={field.name} type="email" placeholder="m@example.com" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <Input {...field} id={field.name} type="password" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button" onClick={() => login()}>
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="../register">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
