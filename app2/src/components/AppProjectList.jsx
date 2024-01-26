import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "./AppLayout";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
//import 'bootstrap/dist/css/bootstrap.css';

export default function ProjectList() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetchProjectList();
  }, []);

  const fetchProjectList = () => {
    axios
      .get("https://localhost:7138/api/projects")
      .then(function (response) {
        // fulfilled
        console.log(response.data);
        setProjectList(response.data);
      })
      .catch(function (error) {
        // rejected
        console.log(error);
      });
  };

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannnot undo this one",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("https://localhost:7138/api/projects/" + id)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Project deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchProjectList();
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
    });
  }

  return (
    <Layout>
      <div className="container-sm">
        <div>
          <Link className="btn mt-3 btn-success float-end mb-3" to="/create">
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col">Name</th>
              <th className="col">Description</th>
              <th className="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((project, key) => {
              return (
                <tr key={key}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>
                    <button
                      className="btn float-end btn-danger"
                      onClick={() => handleDelete(project.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>

                    <Link
                      className="float-end me-2 btn btn-warning"
                      to={`/edit/${project.id}`}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </Link>

                    <Link
                      className="float-end me-2 btn btn-primary"
                      to={`/project/${project.id}`}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
