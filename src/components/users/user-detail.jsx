import { Input, Modal } from "antd";

const UserDetail = (props) => {
  const { isViewModalOpen, setIsViewModalOpen, dataUserDetail } = props;

  const handleCancel = () => {
    setIsViewModalOpen(false);
  };

  return (
    <>
      <Modal
        title='VIEW USER DETAIL'
        open={isViewModalOpen}
        onCancel={handleCancel}
        footer={null} // Removes the footer
      >
        <div className='form-control'>
          <span>Full Name</span>
          <Input
            value={dataUserDetail.fullName}
            disabled
          />
        </div>
        <div className='form-control'>
          <span>Email</span>
          <Input
            value={dataUserDetail.email}
            disabled
          />
        </div>
        <div className='form-control'>
          <span>Phone Number</span>
          <Input
            value={dataUserDetail.phone}
            disabled
          />
        </div>
      </Modal>
    </>
  );
};

export default UserDetail;
