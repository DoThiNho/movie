import ProfileForm from "@/features/edit-profile/components/ProfileForm";
import { User } from "@/shared/types/auth";
import { AppDispatch, useAppSelector } from "@/store";
import { useUpdateUserMutation } from "@/store/services/userApi";
import { setUserDetail } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
// import { useMeQuery } from "@/store/services/authApi";

export default function ProfileContainer() {
  const { userDetail } = useAppSelector((state) => state.user);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (user: User) => {
    const res = await updateUser({
      ...user,
      id: userDetail.id,
    });
    if (res.data) dispatch(setUserDetail(res.data.data));
  };

  return (
    <div className="flex justify-center items-center h-full bg-black">
      <div className="w-[60%] md:w-[40%] lg:w-[30%] bg-white p-4 rounded-lg">
        <ProfileForm
          initialValues={userDetail}
          onFinish={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
