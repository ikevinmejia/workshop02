import React from "react";

function ImgPostDetalle({ img }) {
  return (
    <figure className="h-[558px] w-full max-w-4xl overflow-hidden rounded-3xl">
      <img className="object-cover w-full h-full" src={img} alt="" />
    </figure>
  );
}

export default ImgPostDetalle;
