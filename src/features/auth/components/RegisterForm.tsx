import { RegisterFormValuesType } from "@/shared/types/auth";
import FormItemWrapper from "@/shared/components/FormItemWrapper";
import { Button, Form, Input } from "antd";
import { useRegisterMutation } from "@/store/services/authApi";
import useRedirect from "@/shared/hooks/useRedirect";
import { useEffect } from "react";

export default function RegisterForm() {
  const [register, { isLoading, isSuccess }] = useRegisterMutation();
  const { redirect } = useRedirect();

  useEffect(() => {
    if (isSuccess) {
      redirect("/login");
    }
  }, [isSuccess, redirect]);

  const onFinish = async (values: RegisterFormValuesType) => {
    await register({
      ...values,
      image: "",
    });
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
      }}
      onFinish={onFinish}
    >
      <FormItemWrapper
        formItemProps={{
          label: "Name",
          name: "name",
          layout: "vertical",
          rules: [
            {
              message: "This is a required field",
              required: true,
            },
          ],
        }}
        content={<Input size="large" placeholder="Enter email" />}
      />
      <FormItemWrapper
        formItemProps={{
          label: "Email",
          name: "email",
          layout: "vertical",
          rules: [
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              message: "This is a required field",
              required: true,
            },
          ],
        }}
        content={<Input size="large" placeholder="Enter email" />}
      />
      <FormItemWrapper
        formItemProps={{
          label: "Password",
          name: "password",
          layout: "vertical",
          rules: [
            { required: true, message: "Please add a password" },
            // { min: 8, message: "Password must have a minimum length of 8" },
            // {
            //   pattern: new RegExp(
            //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
            //   ),
            //   message:
            //     "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
            // },
          ],
        }}
        content={<Input.Password size="large" placeholder="Enter password" />}
      />
      <FormItemWrapper
        formItemProps={{
          label: "Phone number",
          name: "phone",
          layout: "vertical",
          rules: [
            {
              type: "regexp",
              pattern: new RegExp(/\d+/g),
              message: "Please enter a valid phone number!",
            },
          ],
        }}
        content={<Input size="large" placeholder="Enter email" />}
      />
      <FormItemWrapper
        formItemProps={{
          label: "Address",
          name: "address",
          layout: "vertical",
        }}
        content={<Input size="large" placeholder="Enter email" />}
      />

      <FormItemWrapper
        content={
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Register
          </Button>
        }
      ></FormItemWrapper>
    </Form>
  );
}
