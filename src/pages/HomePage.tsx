import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1> Hello home !</h1>
      <Link to="/memo"> Start ! </Link>
    </>
  );
}

export default HomePage;
