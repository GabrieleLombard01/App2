import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "./AppLayout";
import { Link } from "react-router-dom";
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

  return (
    <Layout>

      <div className="container-sm">
        <div>
            <Link
                className="btn mt-3 btn-success float-end mb-3"
                to="/create">
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
                  <button className="float-end btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                  <button className="float-end me-2 btn btn-warning"><i className="fa-solid fa-pencil"></i></button>
                  <button className="float-end me-2 btn btn-primary"><i className="fa-solid fa-eye"></i></button>
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
