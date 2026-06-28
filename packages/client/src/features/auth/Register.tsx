import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { useContent } from "@/components/ContentProvider";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/axios";

export function Register({ data, ...props }: any) {
  const { masterdata }: any = useContent();

  const mutation = useMutation({
    mutationFn: (obj) => api.post("users", obj),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const form = useForm({
    defaultValues: {
      workStatusId: "",
      fullName: "Siva Nargana",
      mobile: "9676969175",
      email: "siva.nargana66@gmail.com",
      password: "Siva@1993",
      confirmPassword: "Siva@1993",
    },
  });

  const onSubmit = form.handleSubmit((values: any) => {
    mutation.mutate(values);
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <FieldGroup>
            <Controller
              name="workStatusId"
              control={form.control}
              rules={{ required: "Please select a work status" }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Work status</FieldLabel>
                  {masterdata?.isLoading ? (
                    <>loading</>
                  ) : (
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex flex-col gap-2 w-fit" aria-invalid={fieldState.invalid}>
                      {masterdata?.data?.workStatus?.map((item: any) => (
                        <div className="flex items-center gap-3" key={item.id}>
                          <RadioGroupItem value={item.id} id={item.name} />
                          <Label htmlFor={item.name}>{item.name}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                </Field>
              )}
            />
            <Controller
              name="fullName"
              control={form.control}
              rules={{
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                  <Input {...field} id={field.name} type="text" placeholder="John Doe" aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />
            <Controller
              name="mobile"
              control={form.control}
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{7,15}$/,
                  message: "Enter a valid mobile number",
                },
              }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Mobile</FieldLabel>
                  <Input {...field} id={field.name} type="tel" placeholder="9876543210" aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />
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
              }}
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
              rules={{
                required: "Please confirm your password",
              }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                  <Input {...field} id={field.name} type="password" aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />
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
