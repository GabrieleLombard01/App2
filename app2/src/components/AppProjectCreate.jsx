import axios from "axios";

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

  /*
        Link -> list project
        <>

            name:
            description:
            button onClick  handleSave

    */

  return <button onClick={handleSave}>Post</button>;
}
