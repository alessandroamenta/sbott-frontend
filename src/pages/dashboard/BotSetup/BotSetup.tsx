import React, { useState } from "react";
import { Button, Tabs, Input, Select, Form } from "antd";
import { ReactComponent as DeleteIcon } from "../../../assets/images/deleteIcon.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/images/googleIcon.svg";
import { ReactComponent as AddIcon } from "../../../assets/images/addIcon.svg";

const BotSetup: React.FC = () => {
  const [isEditing, setIsEditing] = useState({
    name: false,
    company: false,
    value: false,
    purpose: false,
    mission: false,
  });
  const [value, setValue] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [mission, setMission] = useState<string>("");
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const handleChange = (value: string) => {};

  const OnEdithandle = (field: string) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const OnSaveHandle = (field: string) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  const onFinish = (fieldsValue: any) => {};

  return (
    <div className="overflow-auto px-4 mt-0 md:px-6 lg:mt-10 xl:pl-[77px] xl:pr-[132px]">
      <div className="bg-primary flex justify-center items-center flex-1 rounded-xl pt-0 flex-col gap-8 w-full">
        <div className="bg-dark-gray border-none rounded-xl w-full">
          <Tabs defaultActiveKey="1" className="botsetup-tab h-full">
            <Tabs.TabPane
              tab="Bot Setup"
              key="1"
              className="bg-primary rounded-xl bot-setup overflow-auto h-[calc(100vh_-_152px)] sm:h-[calc(100vh_-_158px)] md:h-[calc(100vh_-_178px)] 
                lg:h-[calc(100vh_-_218px)]"
            >
              <Form
                form={form}
                onFinish={onFinish}
                name="expenseform"
                className="edit-modal"
              >
                <div className="grid sm:grid-cols-2 gap-11">
                  <div className="border-b-squid-ink border-b-2 pb-2 sm:pb-4">
                    <div className="flex justify-between pb-3">
                      <label className="text-steel-blue text-base font-medium leading-8">
                        Name Your Bot
                      </label>
                      {isEditing.name ? (
                        <Button
                          onClick={() => OnSaveHandle("name")}
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          onClick={() => OnEdithandle("name")}
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
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
                          message: "Please Enter a Robot name",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        type="text"
                        placeholder="R2D2"
                        className={
                          isEditing.name
                            ? ""
                            : "bg-transparent border-none leading-8 p-0 focus:shadow-none question-input"
                        }
                        disabled={!isEditing.name}
                      />
                    </Form.Item>
                  </div>
                  <div className="border-b-squid-ink border-b-2 pb-2 sm:pb-4">
                    <div className="flex justify-between pb-3">
                      <label className="text-steel-blue text-base font-medium leading-8">
                        Company name
                      </label>
                      {isEditing.company ? (
                        <Button
                          onClick={() => OnSaveHandle("company")}
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          onClick={() => OnEdithandle("company")}
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    <Form.Item
                      className="m-0"
                      name="company"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter a Company Name",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        type="text"
                        placeholder="SolarCo"
                        className={
                          isEditing.company
                            ? ""
                            : "bg-transparent border-none leading-8 p-0 focus:shadow-none question-input"
                        }
                        disabled={!isEditing.company}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="border-b-squid-ink border-b-2 py-3 pr-1 sm:pb-5 sm:pt-6">
                  <label className="text-steel-blue text-base font-medium block leading-8 pb-3">
                    AI Personality
                  </label>
                  <div className="pr-1">
                    <Select
                      className="bg-secondary w-full rounded-md ai-select"
                      defaultValue="Classic"
                      style={{ width: 120 }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Classic",
                          label: "Classic",
                        },
                        {
                          value: "Classic",
                          label: "Classic",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="border-b-squid-ink border-b-2 py-3 pr-1 sm:pb-5 sm:pt-3">
                  <label className="text-steel-blue text-base font-medium block leading-8 pb-3">
                    Reply Length
                  </label>
                  <div className="pr-1">
                    <Select
                      className="bg-secondary w-full rounded-md ai-select"
                      defaultValue="Normal"
                      style={{ width: 120 }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Classic",
                          label: "Classic",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="border-b-squid-ink border-b-2 pt-5 pb-2">
                  <div className="flex justify-between">
                    <label className="text-steel-blue text-base font-medium leading-8">
                      Qualifying Questions
                    </label>
                    <Button
                      className="border-light-orange text-light-orange flex items-center font-bold gap-2 border 
                       rounded-md py-0 px-4"
                    >
                      <AddIcon className="w-6" /> Add
                    </Button>
                  </div>
                  <div className="border-b border-dashed border-squid-ink flex justify-between pt-2 pb-3">
                    <Input
                      placeholder="hi How are you?"
                      className="border-none text-base p-0 focus:shadow-none question-input"
                    />
                    <div className="flex items-center gap-2">
                      <Button className="bg-secondary border-none rounded-md font-medium px-4 hover:text-white">
                        Edit
                      </Button>
                      <Button className="bg-secondary border-none rounded-md font-medium p-2">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-squid-ink flex justify-between pt-2 pb-3">
                    <Input
                      placeholder="hi How are you?"
                      className="border-none text-base p-0 focus:shadow-none question-input"
                    />
                    <div className="flex items-center gap-2">
                      <Button className="bg-secondary border-none rounded-md font-medium px-4 hover:text-white">
                        Edit
                      </Button>
                      <Button className="bg-secondary border-none rounded-md font-medium p-2">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2 pb-3">
                    <Input
                      placeholder="What are your goals?"
                      className="border-none text-base p-0 focus:shadow-none question-input"
                    />
                    <div className="flex items-center gap-2">
                      <Button className="bg-secondary border-none rounded-md font-medium px-4 hover:text-white">
                        Edit
                      </Button>
                      <Button className="bg-secondary border-none rounded-md font-medium p-2">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="border-b-2 border-b-squid-ink pt-3 pb-3 sm:pt-6">
                    <div className="flex justify-between pb-2 sm:pb-4">
                      <label className="text-steel-blue text-base font-medium">
                        Company Values
                      </label>
                      {isEditing.value ? (
                        <Button
                          className="bg-secondary border-none rounded-xl font-medium px-3 hover:text-white"
                          onClick={() => OnSaveHandle("value")}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
                          onClick={() => OnEdithandle("value")}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    <div className="pr-1">
                      <TextArea
                        name="value"
                        className={
                          isEditing.value
                            ? ""
                            : "bg-transparent border-none text-base w-full p-0 h-auto focus:shadow-none company-details"
                        }
                        value={value}
                        placeholder="Write Here"
                        autoSize={{ minRows: 1 }}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={!isEditing.value}
                      />
                    </div>
                  </div>
                  <div className="border-b-2 border-b-squid-ink pt-0 pb-3 sm:pt-6">
                    <div className="flex justify-between pb-2 sm:pb-4">
                      <label className="text-steel-blue text-base font-medium">
                        Purpose of Conversation
                      </label>
                      {isEditing.purpose ? (
                        <Button
                          className="bg-secondary border-none rounded-xl font-medium px-3 hover:text-white"
                          onClick={() => OnSaveHandle("purpose")}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
                          onClick={() => OnEdithandle("purpose")}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    <div className="pr-1">
                      <TextArea
                        name="purpose"
                        className={
                          isEditing.purpose
                            ? ""
                            : "bg-transparent border-none text-base w-full p-0 h-auto focus:shadow-none company-details"
                        }
                        value={purpose}
                        autoSize={{ minRows: 1 }}
                        placeholder="Write Here"
                        onChange={(e) => setPurpose(e.target.value)}
                        disabled={!isEditing.purpose}
                      />
                    </div>
                  </div>
                  <div className="border-b-2 border-b-squid-ink pt-0 pb-3 sm:pt-6">
                    <div className="flex justify-between pb-2 sm:pb-4">
                      <label className="text-steel-blue text-base font-medium">
                        Company Mission
                      </label>
                      {isEditing.mission ? (
                        <Button
                          className="bg-secondary border-none rounded-xl font-medium px-3 hover:text-white"
                          onClick={() => OnSaveHandle("mission")}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          className="bg-secondary border-none rounded-xl font-medium px-4 hover:text-white"
                          onClick={() => OnEdithandle("mission")}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    <div className="pr-1">
                      <TextArea
                        name="mission"
                        className={
                          isEditing.mission
                            ? ""
                            : "bg-transparent border-none text-base w-full p-0 h-auto focus:shadow-none company-details"
                        }
                        value={mission}
                        autoSize={{ minRows: 1 }}
                        placeholder="Write Here"
                        onChange={(e) => setMission(e.target.value)}
                        disabled={!isEditing.mission}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="Integrations"
              key="2"
              className="bg-primary p-4 sm:pt-[42px] sm:pb-10 sm:pl-8 sm:pr-9 rounded-xl"
            >
              <label className="text-steel-blue text-base block pb-[10px]">
                Required Integrations
              </label>
              <div className="bg-gunmetal-green border border-cadet flex flex-wrap gap-2 justify-between items-center rounded-xl py-2 pl-4 pr-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <GoogleIcon />
                  <p className="text-cadet-gray m-0 max-w-[600px]">
                    Pellentesque ante neque, posuere quis gravida a, dapibus in
                    nulla. Cras facilisis ex a imperdiet fermentum.
                  </p>
                </div>
                <button className="bg-gray-asparagus flex justify-center items-center w-7 h-7 rounded-full">
                  <span className="bg-pale-green w-4 h-4 block rounded-full"></span>
                </button>
                {/* <button className="w-7 h-7 bg-gray-asparagus rounded-full flex justify-center items-center">
                          <span className="bg-pale-green w-4 h-4 block rounded-full"></span>
                        </button> */}
              </div>
              <div className="pt-4 sm:pt-8">
                <label className="text-steel-blue text-base block pb-3">
                  Others
                </label>
                <div className="bg-dark-black flex justify-center items-center rounded-xl h-[104px]">
                  <p className="text-steel-blue text-base px-4 m-0">
                    We’re building more integrations with time. Stay tunned!
                  </p>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BotSetup;
