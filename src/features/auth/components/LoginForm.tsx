import { Button, Form, Input } from "antd";
import FormItemWrapper from "@/shared/components/FormItemWrapper";
import { LoginFormValuesType } from "@/shared/types/auth";
import { useLoginMutation } from "@/store/services/authApi";
import useRedirect from "@/shared/hooks/useRedirect";
import { useEffect } from "react";
import { setToken } from "@/utils/auth.util";

export default function LoginForm() {
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const { redirect } = useRedirect();

  useEffect(() => {
    if (isSuccess) {
      setToken(data.data.token);
      setTimeout(() => {
        redirect("/");
      }, 1000);
    }
  }, [data, isSuccess, redirect]);

  const onFinish = async (values: LoginFormValuesType) => {
    await login(values);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ email: "", password: "" }}
      onFinish={onFinish}
    >
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
        content={
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Login
          </Button>
        }
      ></FormItemWrapper>
    </Form>
  );
}
