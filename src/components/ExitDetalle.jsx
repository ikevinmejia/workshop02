import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const styles = {
  width: "45px",
  height: "45px",
};

function ExitDetalle() {
  return (
    <>
      <div className="flex justify-between max-w-4xl mx-auto ">
        <KeyboardArrowLeftIcon sx={styles} />
        <MoreHorizIcon sx={styles} />
      </div>
    </>
  );
}

export default ExitDetalle;
