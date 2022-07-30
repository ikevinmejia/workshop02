import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Contexto } from "../context/Context";
import { patchData } from "../helpers/CRUD";

function AddComment() {
  const [input, setInput] = useState("");
  const { comentario, setComentario } = useContext(Contexto);

  const { id } = JSON.parse(localStorage.getItem("infoPost"));

  const onChange = ({ target }) => {
    setInput(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const nuevoComentario = {
      comentario: input,
    };

    comentario.push(nuevoComentario);

    setComentario(comentario);
    patchData(`https://data-sprint-02.herokuapp.com/post/${id}`, {
      comentarios: comentario,
    });
    console.log(comentario);
  };
  return (
    <>
      <form
        className="w-11/12 max-w-2xl mx-auto my-5 "
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="flex items-center justify-between w-full px-3 bg-white shadow-md rounded-3xl ">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-11/12 border-transparent focus:border-transparent focus:ring-0"
            onChange={(e) => onChange(e)}
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
