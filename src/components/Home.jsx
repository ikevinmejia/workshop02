import React, { useContext, useEffect, useState } from "react";
import logo from "../images/logo.png";
import corazon from "../images/corazon.png";
import mensajes from "../images/mensajes.png";
import DesignPost from "./DesignPost";
import NavBar from "./NavBar";
import FormModal from "./FormModal";
import { Contexto } from "../context/Context";
import { getData } from "../helpers/CRUD";

const Home = () => {
  const { showModal } = useContext(Contexto);

  const [designPost, setDesignPost] = useState(initial);

  useEffect(() => {
    getData(setDesignPost, "https://data-sprint-02.herokuapp.com/post");
  }, []);

  console.log(designPost);

  if (designPost != null) {
    return (
      <div className="container h-screen p-5 overflow-hidden">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="w-52" />
          <div className="flex gap-2">
            <div>
              <img src={corazon} alt="" className="object-cover" />
            </div>
            <div>
              <img src={mensajes} alt="" />
            </div>
          </div>
        </div>
        {showModal && <FormModal />}

        <div
          className="flex flex-col items-center gap-5 mt-10 overflow-y-scroll"
          style={{ height: "85%" }}
        >
          {designPost.map((e) => (
            <DesignPost
              imagen={e.img}
              key={e.id}
              nombre={e.name}
              descripcion={e.description}
            />
          ))}
        </div>

        <NavBar />
      </div>
    );
  }
};

export default Home;
