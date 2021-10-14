import React, { useEffect } from "react";
import "./Listagem.css";
import { db } from "../conectadb";
import { doc, deleteDoc } from "firebase/firestore/lite";

const Listagem = ({ filmes, setFilmes }) => {
  const excluiFilme = async (id, titulo) => {

    if (window.confirm(`Confirma a exclusão do filme "${titulo}"?`)) {

      await deleteDoc(doc(db, "filmes", id));



      const filmes2 = filmes.filter((filme) => filme.id !== id);

      setFilmes(filmes2);

    };

  }

  return (
    <div className="container-fluid">
      {filmes.map((filme) => (
        <div className="card" key={filme.id}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h4>{filme.titulo}</h4>
              <i className="far fa-trash-alt text-danger" onClick={() => excluiFilme(filme.id, filme.titulo)}></i>
            </div>
            <p>{filme.sinopse}</p>
            <a href={filme.link} target="_blank" rel="noppener noreferrer"></a>
            Ver trailer
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listagem;
