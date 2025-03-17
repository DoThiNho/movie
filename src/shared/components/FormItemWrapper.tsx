import { Form, FormItemProps } from "antd";
import React from "react";

interface FormItemWrapperProps {
  formItemProps?: FormItemProps;
  content: React.ReactNode;
}

export default function FormItemWrapper({
  formItemProps,
  content,
}: FormItemWrapperProps) {
  return formItemProps ? (
    <Form.Item {...formItemProps}>{content}</Form.Item>
  ) : (
    <>{content}</>
  );
}
