import { useEffect } from "react";
import axios from "axios";
import { Layout } from "./AppLayout";

export default function ProjectList() {
  useEffect(() => {
    fetchProjectList();
  }, []);

  const fetchProjectList = () => {
    axios
      .get("https://localhost:7138/api/projects")
      .then(function (response) {
        // fulfilled
        console.log(response.data);
      })
      .catch(function (error) {
        // rejected
        console.log(error);
      });
  };

  return <Layout>Hello</Layout>;
}
