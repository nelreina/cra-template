import React from "react";
import AppModal from "./AppModal.jsx";

const FormModal = ({
  open,
  cancel,
  data,
  save,
  title,
  form: Form,
  ...props
}) => {
  return (
    <AppModal
      open={open}
      cancel={cancel}
      title={title}
      titleStyle={styles.title}
    >
      <Form data={data} submit={save} {...props} />
    </AppModal>
  );
};

export default FormModal;
const styles = {
  title: {
    backgroundColor: "#1F78B4",
    color: "white",
    textAlign: "center",
  },
};
