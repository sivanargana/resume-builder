import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/axios";
import { toast } from "sonner";

export function Register({ data, ...props }: any) {
  const mutation = useMutation({
    mutationFn: (obj) => api.post("auth/register-with-email", obj),
    onSuccess: (data) => {
      toast.success("Registered Successfully!");
    },
  });

  const form = useForm({
    defaultValues: {
      firstName: "Suray",
      lastName: "Nargana",
      mobile: "9676969175",
      email: "suryadurgamiddes99@gmail.com",
      password: "Surya@1999",
      confirmPassword: "Surya@1999",
    },
  });

  const onSubmit = form.handleSubmit(({ confirmPassword, ...values }: any) => {
    mutation.mutate(values);
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-3xl mb-4">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="firstName"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
                    <Input {...field} id={field.name} type="text" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
              <Controller
                name="lastName"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
                    <Input {...field} id={field.name} type="text" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="mobile"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Mobile</FieldLabel>
                    <Input {...field} id={field.name} type="tel" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input {...field} id={field.name} type="email" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="password"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input {...field} id={field.name} type="password" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
              <Controller
                name="confirmPassword"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                    <Input {...field} id={field.name} type="password" aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
            </div>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="../login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
