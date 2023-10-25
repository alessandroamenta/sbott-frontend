import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form, Input } from "antd";

const ClientModal: React.FC = () => {
  const [isEditing, setIsEditing] = useState({
    name: false,
    number: false,
    email: false,
  });
  // const nameInputRef: any = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  let record = location?.state?.record;
  const [editData] = useState(record);

  useEffect(() => {
    if (record) {
      const newData = {
        ...editData,
      };
      form.setFieldsValue(newData);
    }
  }, [record, editData, form]);

  const onFinish = (fieldsValue: any) => {};

  const handleEdit = (field: string) => {
    setIsEditing({ ...isEditing, [field]: true });
    // if (field === "name") {
    //   nameInputRef.current.focus();
    // }
  };

  const onReturnHandle = () => {
    navigate(`/client`);
  };

  const OnSaveHandle = (field: string) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  return (
    <div className="px-4 sm:px-6 sm:pt-2 xl:pl-11 xl:pr-7">
      <Button
        onClick={onReturnHandle}
        className="bg-secondary border-none rounded-xl font-medium leading-8 h-auto py-0.5 px-3"
      >
        Return
      </Button>
      <div className="bg-primary rounded-xl mt-4 sm:mt-6">
        <div className="bg-secondary rounded-t-xl py-2 px-5">
          <span className="text-base text-white font-bold leading-8 sm:text-lg">
            John Johnson
          </span>
        </div>
        <div className="p-4 sm:pt-5 sm:pb-8 sm:px-5">
          <Form
            form={form}
            onFinish={onFinish}
            name="expenseform"
            className="edit-modal"
          >
            <div className="border-b-squid-ink border-b-2 pb-4">
              <div className="flex justify-between items-center sm:pb-[14px]">
                <label className="text-steel-blue text-base font-medium leading-8">
                  Name
                </label>
                {isEditing.name ? (
                  <Button
                    onClick={() => OnSaveHandle("name")}
                    className="bg-gunmetal-light border-none rounded-xl font-medium px-4 hover:text-white"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit("name")}
                    className="bg-gunmetal-light border-none rounded-xl font-medium px-4 hover:text-white"
                  >
                    Edit
                  </Button>
                )}
              </div>
              <Form.Item
                className="m-0"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter a name",
                  },
                ]}
              >
                <Input
                  size="large"
                  type="text"
                  placeholder=""
                  className={
                    isEditing.name
                      ? ""
                      : "bg-transparent text-white border-none leading-8 p-0 focus:shadow-none question-input"
                  }
                  // ref={nameInputRef}
                  disabled={!isEditing.name}
                />
              </Form.Item>
            </div>
            <div className="border-b-squid-ink border-b-2 py-4">
              <div className="flex justify-between items-center sm:pb-[14px]">
                <label className="text-steel-blue text-base font-medium leading-8">
                  Phone
                </label>
                {isEditing.number ? (
                  <Button
                    onClick={() => OnSaveHandle("number")}
                    className="bg-gunmetal-light border-none rounded-xl font-medium px-4 hover:text-white"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit("number")}
                    className="bg-gunmetal-light border-none rounded-xl font-medium px-4 hover:text-white"
                  >
                    Edit
                  </Button>
                )}
              </div>
              <Form.Item
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Please Enter a number ",
                  },
                ]}
              >
                <Input
                  size="large"
                  type="number"
                  placeholder=""
                  className={
                    isEditing.number
                      ? ""
                      : "bg-transparent text-white border-none leading-8 p-0 focus:shadow-none question-input"
                  }
                  // ref={numberInputRef}
                  disabled={!isEditing.number}
                />
              </Form.Item>
            </div>
            <div className="pt-4">
              <div className="flex justify-between items-center sm:pb-[14px]">
                <label className="text-steel-blue text-base font-medium leading-8">
                  Email
                </label>
                {isEditing.email ? (
                  <Button
                    onClick={() => OnSaveHandle("email")}
                    className="bg-gunmetal-light border-none rounded-xl font-medium px-4 hover:text-white"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit("email")}
                    className="bg-gunmetal-light border-none rounded-xl font-medium px-4 hover:text-white"
                  >
                    Edit
                  </Button>
                )}
              </div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please Enter a Email ",
                  },
                ]}
              >
                <Input
                  size="large"
                  type="text"
                  placeholder=""
                  className={
                    isEditing.email
                      ? ""
                      : "bg-transparent text-white border-none leading-8 p-0 focus:shadow-none question-input"
                  }
                  // ref={emailInputRef}
                  disabled={!isEditing.email}
                />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ClientModal;
