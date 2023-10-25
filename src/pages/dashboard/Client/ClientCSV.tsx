import React from "react";
import { Button, Modal, Upload, Anchor } from "antd";

interface ClientCSVProps {
  isModalOpenCsv: boolean;
  handleOkCsv: () => void;
  handleCancelCsv: () => void;
}
const ClientCSV: React.FC<ClientCSVProps> = ({
  isModalOpenCsv,
  handleOkCsv,
  handleCancelCsv,
}) => {
  const { Dragger } = Upload;
  const { Link } = Anchor;
  return (
    <div>
      <Modal
        className="bg-primary rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 m-0 modal-main"
        title="Upload A CSV"
        open={isModalOpenCsv}
        onOk={handleOkCsv}
        onCancel={handleCancelCsv}
      >
        <Dragger className="bg-secondary border border-cadet border-dashed rounded-3xl mt-7 p-4 sm:px-[61px] sm:py-12 dragble">
          <p className="text-quick-silver text-sm m-0 flex flex-col items-center ant-upload-text sm:min-w-[338px]">
            Drag and Drop or{" "}
            <Link
              href="#"
              title="Click Here"
              className="click-here p-0 inline-block"
            />
            To upload documents
          </p>
        </Dragger>
        <Button
          // onClick={showModal}
          htmlType="submit"
          className="bg-bistre text-light-orange text-sm border-none rounded-lg font-bold block h-full m-auto leading-8 min-w-full py-2 px-0 mt-6"
        >
          Save CSV
        </Button>
      </Modal>
    </div>
  );
};
export default ClientCSV;
