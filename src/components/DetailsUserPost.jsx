import React from "react";

function DetailsUserPost({ imgProfile, nameUser }) {
  return (
    <>
      <section className="mx-auto mt-5 flex h-[78px] w-[296px] items-center justify-evenly rounded-3xl border p-2 shadow-lg">
        <figure className="h-full w-[60px] overflow-hidden rounded-full border-2 border-[#ff7674]">
          <img
            className="object-cover object-center w-full h-full "
            src={imgProfile}
            alt=""
          />
        </figure>
        <h2 className="text-lg font-semibold">{nameUser}</h2>
      </section>
    </>
  );
}

export default DetailsUserPost;
