import { LogoImg } from "@/assets";
import { Avatar, Button, Col, Row } from "antd";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store";
import { useLazyMeQuery } from "@/store/services/authApi";
import { useEffect } from "react";
import { setUserDetail } from "@/store/slices/userSlice";
import { isEmpty } from "lodash";
import useRedirect from "@/shared/hooks/useRedirect";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const [fetchMe] = useLazyMeQuery();
  const { userDetail } = useAppSelector((state) => state.user);
  const { redirect } = useRedirect();

  useEffect(() => {
    if (isEmpty(userDetail.name)) {
      fetchMe(undefined).then(({ data }) => {
        if (data) {
          dispatch(setUserDetail(data.data));
        }
      });
    }
  }, [userDetail, fetchMe, dispatch]);

  return (
    <div className="bg-primary">
      <Row>
        <Col span={2}>
          <div onClick={() => redirect("/")} className="cursor-pointer">
            <img src={LogoImg} alt="logo" />
          </div>
        </Col>
        <Col span={20} className="flex justify-center items-center">
          <Navbar />
        </Col>
        <Col span={2} className="flex justify-center items-center">
          {!isEmpty(userDetail.name) ? (
            <div className="flex items-center text-white gap-4">
              <div className="text-xl"> Hello, {userDetail.name}</div>
              <Avatar size={64} src={userDetail.image} />
            </div>
          ) : (
            <Button
              type="primary"
              className="bg-secondary"
              onClick={() => redirect("/login")}
            >
              Login
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}
