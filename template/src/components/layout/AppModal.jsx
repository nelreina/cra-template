import React from "react";
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const AppModal = ({ children, open, cancel, save }) => {
  return (
    <Modal
      style={{
        overflow: "scroll",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
      size="large"
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      disableBackdropClick
    >
      <div style={{ maxWidth: "600px" }}>
        <Card size="large">
          <CardContent>{children}</CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            {cancel && <Button onClick={cancel}>Cancel</Button>}
          </CardActions>
        </Card>
      </div>
    </Modal>
  );
};

export default AppModal;
