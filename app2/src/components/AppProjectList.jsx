import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "./AppLayout";

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((project, key) => {
            return (
              <tr key={key}>
                <td>{project.name}</td>
                <td>{project.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
