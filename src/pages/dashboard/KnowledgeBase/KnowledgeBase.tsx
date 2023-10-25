import React, { useState } from "react";
import { Button, Collapse, Table, Modal, Input, Upload, Anchor } from "antd";
import { ReactComponent as AddIcon } from "../../../assets/images/addIcon.svg";
import { ReactComponent as LinkIcon } from "../../../assets/images/linkIcon.svg";
import { ReactComponent as DownArrowIcon } from "../../../assets/images/downArrowIcon.svg";

const KnowledgeBase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputFields, setInputFields] = useState([1]);
  const { Panel } = Collapse;
  const { Dragger } = Upload;
  const { Link } = Anchor;

  const onChange = (key: string | string[]) => {};

  const addInputField = () => {
    const newInputFields = [...inputFields];
    newInputFields.push(newInputFields.length + 1);
    setInputFields(newInputFields);
  };
  // table data

  const columns = [
    {
      title: "Content Type",
      dataIndex: "Content Type",
      key: "Content Type",
      width: "18.5%",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Edit",
      dataIndex: "Edit",
      key: "Edit",
      width: "4%",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-1 overflow-auto rounded-xl px-4 h-[calc(100%_-_102px)] knowledge-main md:px-6 xl:pt-10 xl:pb-16 xl:pl-[77px] xl:pr-[132px] xl:px-10">
      <div className="flex-col gap-8 w-full">
        <div className="border-none bg-transparent rounded-xl bot-setup-main">
          <Collapse
            defaultActiveKey={["1"]}
            onChange={onChange}
            className="bg-primary border-none rounded-xl knowledge-collapse"
          >
            <Panel header="Knowledge Base" key="1" className="border-none">
              <p className="text-base text-cadet-gray m-0 p-4 sm:pt-5 sm:pb-10 sm:px-8">
                Although Sbott already has general world knowledge, it gets more
                powerful once you add company-specific data to its knowledge
                base. Here, you’ll add links, documents or text that will serve
                as a basis for his interactions with customers.
              </p>
              <Table
                columns={columns}
                pagination={false}
                locale={{
                  emptyText: "The knowledge base is currently empty",
                }}
              />
              <div className="py-6 px-4 sm:pt-11 sm:pl-9 sm:pr-11">
                <Button
                  onClick={showModal}
                  htmlType="submit"
                  className="border-2 border-light-orange text-light-orange text-lg rounded-2xl font-normal h-full flex items-center justify-center m-auto leading-8 gap-2 py-[10px] px-0 min-w-full sm:min-w-[420px]"
                >
                  <AddIcon /> Add knowledge
                </Button>
              </div>
            </Panel>
          </Collapse>
          <div className="bg-secondary rounded-xl py-3 pl-6 pr-4 mt-3">
            <div className="flex justify-between items-center">
              <h6 className="leading-8 text-base font-bold m-0">Test Area</h6>
              <DownArrowIcon />
            </div>
            <p className="text-cadet-gray text-base m-0">
              Start a conversation with your bot to see if it’s working
              properly.
            </p>
          </div>
        </div>
      </div>
      <Modal
        className="bg-primary rounded-xl p-0 m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 modal-main"
        title="Add Knowledge"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="pt-5 sm:pt-7">
          <label className="text-base text-white leading-8 font-bold pb-0.5 block">
            Insert URL
          </label>
          {inputFields.map((index: number) => (
            <div key={index}>
              <Input
                prefix={<LinkIcon />}
                className="bg-secondary border border-cadet rounded-xl px-4 py-3"
              />
            </div>
          ))}
          <Button
            className="bg-bistre text-light-orange border-none rounded-lg leading-8 w-full font-bold h-auto py-0.5 mt-3"
            onClick={addInputField}
          >
            Add another Link
          </Button>
          <div className="pt-6">
            <label className="text-white text-base font-bold leading-8 block pb-3">
              Add a document
            </label>
            <Dragger className="bg-gunmetal-light border-1 border-dashed border-cadet rounded-3xl p-4 sm:px-[61px] sm:py-12">
              <p className="text-quick-silver text-sm m-0 flex flex-col items-center ant-upload-text">
                Drag and Drop or
                <Link
                  href="#"
                  title="Click Here"
                  className="inline-block p-0 text-light-orange click-here"
                />
                To upload documents
              </p>
            </Dragger>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KnowledgeBase;
