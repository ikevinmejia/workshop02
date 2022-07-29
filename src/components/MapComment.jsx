import React from "react";

function MapComment({ usuario }) {
  return (
    <>
      <div className="w-full max-w-4xl px-4 mt-4">
        <p className="text-xl">{usuario}</p>
        <p className=" text-base font-normal leading-normal text-[#2F2F2F]">
          {comentario}
        </p>
      </div>
    </>
  );
}

export default MapComment;
