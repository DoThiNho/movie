import { Col, Row } from "antd";
import LoginForm from "@/features/auth/components/LoginForm";
// import { AuthImg } from "@/assets";
// import useRedirect from "@/shared/hooks/useRedirect";

const LoginContainer = () => {
  // const { redirect } = useRedirect();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[60%] shadow-lg p-4">
        <Row className="w-full h-full">
          <Col span={12} className="h-full">
            {/* <div className="h-[80%]">
              <img
                src={AuthImg}
                alt="auth"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="text-center text-lg cursor-pointer text-blue-500"
              onClick={() => redirect("/register")}
            >
              Create an account
            </div> */}
          </Col>
          <Col span={12} className="h-full">
            <div className="h-full flex flex-col">
              <h1 className="text-4xl font-bold text-center mb-6">LOGIN</h1>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginContainer;
