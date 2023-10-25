import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Switch, Typography, Modal, Form, Input } from "antd";
import { type ColumnsType } from "antd/es/table";
import ClientCSV from "./ClientCSV";
import { ReactComponent as AddIcon } from "../../../assets/images/editIcon.svg";

interface DataType {
  chart?: any;
  key: React.Key;
  name: string;
  number: number;
  email: string;
  status: boolean;
  manage?: any;
}
const Client: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpenCsv, setIsModalOpenCsv] = useState<boolean>(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  // Edit
  const handleEdit = (record: any) => {
    const id = record.key;
    navigate(`/client/edit/${id}`, { state: { record } });
  };
  // View map
  const handleViewChart = () => {
    navigate("/inbox");
  };
  // Add Client
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = () => {};
  // Add Csv
  const handleCsvModal = () => {
    setIsModalOpenCsv(true);
  };
  const handleOkCsv = () => {
    setIsModalOpen(false);
  };
  const handleCancelCsv = () => {
    setIsModalOpenCsv(false);
  };
  // Table
  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "",
      render: (_, record) => {
        return (
          <span>
            <Button
              onClick={() => handleViewChart()}
              className="bg-gunmetal border-none rounded-3xl text-xs font-bold leading-8 py-px h-auto px-3"
            >
              View chat
            </Button>
          </span>
        );
      },
    },
    {
      title: "Client name",
      dataIndex: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "number",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Bot Status",
      dataIndex: "status",
      render: (status, record) => (
        <Switch
          checked={status}
          onChange={(checked) => handleStatusChange(checked, record)}
        />
      ),
    },
    {
      title: "Manage",
      dataIndex: "manage",
      render: (_, record) => {
        return (
          <span>
            <Typography.Link onClick={() => handleEdit(record)}>
              <AddIcon className="editicons" />
            </Typography.Link>
          </span>
        );
      },
    },
  ];
  const [data, setData] = useState<DataType[]>([
    {
      key: "1",
      name: "John Brown",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "2",
      name: "Jim Green",
      number: 42,
      email: "hello@gmail.com",
      status: true,
    },
    {
      key: "3",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: true,
    },
    {
      key: "4",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "5",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: true,
    },
    {
      key: "6",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "7",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "8",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: true,
    },
    {
      key: "9",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "10",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "11",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: false,
    },
    {
      key: "12",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: true,
    },
    {
      key: "13",
      name: "Joe Black",
      number: 32,
      email: "hello@gmail.com",
      status: true,
    },
  ]);
  const handleStatusChange = (checked: boolean, record: DataType) => {
    const updatedData = data.map((item: any) => {
      if (item.key === record.key) {
        return { ...item, status: checked };
      }
      return item;
    });
    // Update the data in the state
    setData(updatedData);
  };
  return (
    <>
      <div className="flex-1 h-[calc(100%_-_102px)] px-4 lg:pt-5 md:px-6 xl:pl-11 xl:pr-7">
        <div className="flex justify-end pb-3 gap-3">
          <Button
            onClick={handleOpen}
            className="bg-secondary text-white border-none rounded-xl font-medium leading-8 h-auto tracking-[-0.28px] py-0.5 px-3 hover:text-white"
          >
            Add client Manually
          </Button>
          <Button
            onClick={handleCsvModal}
            className="bg-secondary text-white border-none rounded-xl font-medium leading-8 h-auto tracking-[-0.28px] py-0.5 px-3 hover:text-white "
          >
            Upload CSV
          </Button>
        </div>
        <Table
          className="client-data-table"
          columns={columns}
          dataSource={data}
          pagination={{
            showTitle: false,
            className: "pagination mb-0",
            onChange(current) {
              setPage(current);
            },
            pageSizeOptions: ["10", "30", "50", "100"],
            showSizeChanger: true,
          }}
        />
      </div>
      {/* client modal */}
      <Modal
        className="bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-0 m-0 modal-main"
        title="Add Client Manually"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          onFinish={onFinish}
          name="expenseform"
          className="client-modal sm:pt-7"
        >
          <label className="text-white font-bold block sm:leading-8 sm:pb-0.5 sm:text-base">
            Name
          </label>
          <Form.Item
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
              className="bg-gunmetal-green border-cadet rounded-xl sm:min-h-[51px]"
            />
          </Form.Item>
          <label className="text-white font-bold block sm:leading-8 sm:pb-0.5 sm:text-base">
            Phone Number
          </label>
          <Form.Item
            name="number"
            rules={[
              {
                required: true,
                message: "Please Enter a Phone Number",
              },
            ]}
          >
            <Input
              size="large"
              type="number"
              placeholder=""
              className="bg-gunmetal-green border-cadet rounded-xl sm:min-h-[51px]"
            />
          </Form.Item>
          <label className="text-white sm:text-base font-bold block sm:leading-8 sm:pb-0.5">
            Email
          </label>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please Enter a Email",
              },
            ]}
          >
            <Input
              size="large"
              type="text"
              placeholder=""
              className="bg-gunmetal-green border-cadet rounded-xl sm:min-h-[51px]"
            />
          </Form.Item>
          <Button
            // onClick={showModal}
            htmlType="submit"
            className="bg-bistre text-light-orange border-none rounded-lg font-bold text-sm h-full block m-auto leading-8 py-2 
            px-0 min-w-full mt-5 sm:mt-7"
          >
            Save Client
          </Button>
        </Form>
      </Modal>
      {/* csv modal */}
      <ClientCSV
        isModalOpenCsv={isModalOpenCsv}
        handleOkCsv={handleOkCsv}
        handleCancelCsv={handleCancelCsv}
      />
    </>
  );
};
export default Client;
