import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  direction: "rtl",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "16px 32px 20px 32px",
  borderRadius: "5px",
};

interface PropTypes {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ title, children, open, onClose }: PropTypes) {
  return (
    <MuiModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseIcon
          className="absolute top-5 right-7 cursor-pointer"
          onClick={() => onClose()}
        />
        <Typography
          id="modal-modal-title"
          dir="rtl"
          variant="h6"
          component="h2"
          className="text-center"
        >
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {children}
        </Typography>
      </Box>
    </MuiModal>
  );
}
