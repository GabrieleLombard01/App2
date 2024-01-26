import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


export default function ProjectEdit() {
  const [Id, setId] = useState(useParams().id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleUpdate() {
    axios
      .put("https://localhost:7138/api/projects", {
        Id: Id,
        name: name,
        description: description,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Projet saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response.data);
        setName("");
        setDescription("");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "An error occurred!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      });
  }

  return (
    <>
      <div className="container-sm pt-5">
        <h1 className="text-center text-secondary">Edit...</h1>
        <form className="w-75 mx-auto">
          <label className="form-label text-start fw-bold">
            Inserisci nome
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
          />

          <label className="mt-2 form-label text-start fw-bold">
            Inserisci descrizione
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            type="text"
          />
        </form>
        <div className="w-75 mx-auto">
        <Link className="btn btn-secondary mt-3" to="/">
        <i className="fa-solid fa-arrow-left"></i>
        </Link>
          <button className="mt-3 float-end btn btn-success" onClick={handleUpdate}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}
