import React from "react";
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core";

const AppModal = ({
  children,
  open,
  cancel,
  title,
  titleStyle,
  width = "inherit",
  maxWidth = "600px",
  cancelButtonName = "Cancel",
}) => {
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
      <div style={{ width, maxWidth }}>
        <Card size="large">
          {title && <CardHeader style={titleStyle} title={title} />}
          <CardContent>{children}</CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            {cancel && <Button onClick={cancel}>{cancelButtonName}</Button>}
          </CardActions>
        </Card>
      </div>
    </Modal>
  );
};

export default AppModal;
