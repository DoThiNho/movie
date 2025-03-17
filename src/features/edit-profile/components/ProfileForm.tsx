import FormItemWrapper from "@/shared/components/FormItemWrapper";
import { User } from "@/shared/types/auth";
import { AppDispatch, useAppSelector } from "@/store";
import { useUploadAvatarMutation } from "@/store/services/imageApi";
import { setUserDetail } from "@/store/slices/userSlice";
import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface ProfileFormProps {
  initialValues: User;
  onFinish: (values: User) => void;
  isLoading: boolean;
}

export default function ProfileForm({
  initialValues,
  onFinish,
  isLoading,
}: ProfileFormProps) {
  const { userDetail } = useAppSelector((state) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm<User>();
  const [imageUrl, setImageUrl] = useState<string>();

  const [uploadAvatar, { isLoading: isLoadingAvatar }] =
    useUploadAvatarMutation();

  useEffect(() => {
    form.setFieldsValue(initialValues);
    setImageUrl(initialValues.image);
  }, [form, initialValues]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string" || result === null) {
          setImageUrl(result || "");
          dispatch(setUserDetail({ ...userDetail, image: result ?? "" }));
        }
        if (typeof file === "undefined") return;
        const newFormData = new FormData();
        newFormData.append("userId", userDetail.id);
        newFormData.append("file", file);
        uploadAvatar(newFormData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      form={form}
      onFinish={onFinish}
    >
      <div className="flex gap-4 items-center mb-4 relative justify-center">
        <Avatar src={imageUrl} size={150} />
        <label
          htmlFor="upload-image"
          className="cursor-pointer absolute bottom-0 right-[40%]"
        >
          <CameraOutlined className="text-2xl" />
          <input
            id="upload-image"
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </label>
      </div>
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
            className="w-full bg-secondary"
            type="primary"
            htmlType="submit"
            loading={isLoading || isLoadingAvatar}
          >
            Save changes
          </Button>
        }
      ></FormItemWrapper>
    </Form>
  );
}
