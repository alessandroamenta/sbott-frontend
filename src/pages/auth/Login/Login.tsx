import React, { useState, useContext, useEffect } from "react";
// import { auth, provider } from "../../../context/FirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../context/AuthContext";
import { useAuthContext } from "../../../context/AuthContext";
import { Input, Typography, Button, Form, Image, Rate, Col, Row } from "antd";
import { useForm } from "react-hook-form";
import hourseImage from "../../../assets/images/horseIcon.svg";
import userImage from "../../../assets/images/userimageIcon.svg";
import facebookIcon from "../../../assets/images/facebookIcon.svg";
import emailIcon from "../../../assets/images/emailIcon.svg";
import blueShape from "../../../assets/images/blueShapeIcon.svg";
import orangeShape from "../../../assets/images/orangeShapeIcon.svg";
import { auth } from "../../../context/FirebaseAuth/index";
import { Auth } from "firebase/auth";

type UserSubmitForm = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  // const { authState } = useContext(AuthContext);
  const { signIn, googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data: UserSubmitForm) => {
    console.log("data----------", data);
    const { email, password } = data;

    // const response = await login({
    //   auth: authState?.auth,
    //   email: data.email,
    //   password: data.password,
    // });

    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log("error");
    }
  };

  type FieldType = {
    username?: string;
    password?: string;
  };

  const onGoogleHandle = async () => {
    console.log("hererrr");

    // const response = await googleSignIn({ auth: authState.auth });
    try {
      await googleSignIn(auth);
      navigate("/dashboard");
    } catch (error) {
      console.log("Google error");
    }
  };

  const onFacebookHandle = async () => {
    // const response = await FacebookSignIn({ auth: authState.auth });
    // try {
    //   await FacebookSignIn({ auth: authState.auth });
    // } catch (error) {
    //   console.log("facebook error ");
    // }
  };

  return (
    <>
      <div className="bg-dark-black w-full h-screen login-page overflow-auto">
        <Row className="h-full">
          <Col xs={24} lg={12}>
            <div className="flex flex-col h-full relative pt-24 pb-48 px-8 sm:pt-28 sm:pb-36 xl:pl-[100px] xl:pr-[103px]">
              <div className="shapeImage">
                <Image src={blueShape} alt="blueshape" preview={false}></Image>
                <Image src={orangeShape} alt="" preview={false}></Image>
              </div>
              <div className="flex flex-col items-start gap-3 sm:gap-5 xl:gap-7">
                <h2 className="text-white text-2xl leading-normal font-bold m-0 sm:text-4xl xl:leading-[58px] xl:text-5xl">
                  Your Intelligent Chat Companion
                </h2>
                <Link to="#" target="_blank">
                  <Image
                    src={hourseImage}
                    preview={false}
                    className="w-16 sm:w-auto"
                  />
                </Link>
                <h5 className="text-powder-blue text-base font-normal mb-3 leading-[25px] max-w-[430px] sm:mb-11 xl:mb-[87px]">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website.
                </h5>
              </div>
              <div className="flex flex-col gap-3 sm:gap-5">
                <Rate defaultValue={5} className="rating" />
                <h3 className="text-white text-base font-normal leading-8 m-0 sm:text-xl">
                  "We love Landingfolio! Our designers were using it for their
                  projects, so we already knew what kind of design they want."
                </h3>
                <div className="flex gap-4">
                  <Link to="#">
                    <Image src={userImage} alt="" preview={false}></Image>
                  </Link>
                  <div>
                    <h5 className="text-white text-base font-semibold m-0">
                      James Bond
                    </h5>
                    <h6 className="text-sm font-normal m-0">Founder</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="bg-primary flex justify-center items-center h-full  py-4 px-4 sm:py-7 sm:px-0 lg:py-0">
              <div className="w-full sm:w-auto sm:min-w-[420px]">
                <div className="mb-7 sm:mb-9">
                  <h3 className="text-zinc-100 text-xl font-normal mb-1 sm:leading-6 sm:text-2xl sm:mb-3">
                    Welcome Back!
                  </h3>
                  <h2 className="text-white text-2xl font-semibold m-0 sm:leading-normal sm:text-3xl">
                    Login with your email
                  </h2>
                </div>
                <Form onFinish={onSubmit}>
                  <div>
                    <Typography className="text-white text-lg font-medium leading-[23px] mb-2 sm:mb-3">
                      Email
                    </Typography>
                    <Form.Item<FieldType>
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Type here..."
                        className="text-base rounded-lg leading-normal p-4 border-white border-opacity-25 sm:pt-6 sm:pb-5 sm:px-5"
                      />
                    </Form.Item>
                  </div>
                  <div className="input-box">
                    <Typography className="text-white text-lg font-medium leading-[23px] mb-2 sm:mb-3">
                      Password
                    </Typography>
                    <Form.Item<FieldType>
                      className="m-0"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="**************"
                        className="text-base rounded-lg leading-normal border-white border-opacity-25 p-4 sm:pt-6 sm:pb-5 sm:px-5"
                      />
                    </Form.Item>
                  </div>
                  <Button
                    htmlType="submit"
                    className="bg-light-orange text-white text-lg font-bold w-full h-auto rounded-2xl leading-normal py-4 mt-7  hover:text-white sm:py-5 sm:mt-10"
                  >
                    Login
                  </Button>
                  <div className="text-center flex justify-center gap-3 my-5 sm:my-8">
                    <Link to="#">
                      <Image
                        src={facebookIcon}
                        alt=""
                        preview={false}
                        onClick={onFacebookHandle}
                      />
                    </Link>
                    <Link to="#">
                      <Image
                        src={emailIcon}
                        alt=""
                        preview={false}
                        onClick={onGoogleHandle}
                      />
                    </Link>
                  </div>
                  <div className="text-center">
                    <span className="text-white text-base flex justify-center gap-1 leading-[21px]">
                      Don't have an account?
                      <Link to="" className="text-white font-bold">
                        Sign up
                      </Link>
                    </span>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
