// import { AuthImg } from "@/assets";
import { Col, Row } from "antd";
import RegisterForm from "../components/RegisterForm";
// import useRedirect from "@/shared/hooks/useRedirect";

export default function RegisterContainer() {
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
            onClick={() => redirect("/login")}
          >
            Already have an account
          </div> */}
          </Col>
          <Col span={12} className="h-full">
            <div className="h-full flex flex-col">
              <h1 className="text-4xl font-bold text-center mb-6">REGISTER</h1>
              <RegisterForm />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
