import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


export default function ProjectCreate() {
  function handleSave() {
    axios
      .post("https://localhost:7138/api/projects", {
        name: "newproject",
        description: "newproject description",
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return(
    <>
        <form action="">
            <label className="form-label text-start fw-bold">Inserisci nome</label>
            <input className="form-control" type="text" />

            <label className="mt-2 form-label text-start fw-bold">Inserisci descrizione</label>
            <input className="form-control" type="text" />
        </form>
      <button className="mt-3 btn btn-succes" onClick={handleSave}>Post</button>
    </>
    ) 
    
}
