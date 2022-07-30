import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const styles = {
  width: "45px",
  height: "45px",
};

function ExitDetalle() {
  return (
    <>
      <div className="flex justify-between max-w-4xl mx-auto ">
        <Link to="/home">
          <KeyboardArrowLeftIcon sx={styles} />
        </Link>
        <MoreHorizIcon sx={styles} />
      </div>
    </>
  );
}

export default ExitDetalle;
