import React from "react";
import SendIcon from "@mui/icons-material/Send";

function AddComment() {
  return (
    <>
      <form className="w-11/12 max-w-2xl mx-auto my-5 ">
        <div className="flex items-center justify-between w-full px-3 bg-white shadow-md rounded-3xl ">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-11/12 border-transparent focus:border-transparent focus:ring-0"
          />
          <button>
            <SendIcon sx={{ color: "#FF7674" }} />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddComment;
