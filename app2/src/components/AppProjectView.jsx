import { Link } from "react-router-dom";

export default function ProjectView() {
  return (
    <>
      <h1 className="text-center mt-4">Detail page</h1>
      <div className="d-flex justify-content-center align-items-center">
      <Link className="btn btn-secondary mt-3" to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      </div>
    </>
  );
}
