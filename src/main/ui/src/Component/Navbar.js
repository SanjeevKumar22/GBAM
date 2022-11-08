import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
var user = localStorage.getItem("isAuthenticated");
var b = false;
if (user === "true") b = true;
else b = false;
console.log("navbar", user);
const logout = () => {
  localStorage.setItem("isAuthenticated", "false");
  window.location.pathname = "/";
};
console.log("b", b);
const admin = (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <Link class="navbar-brand text-light" to="/menu">
          Global Bank Admin Management
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/menu"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link
        onClickCapture={logout}
        class="nav-link active text-light"
        aria-current="page"
        to="/"
      >
        Logout
      </Link>
    </nav>
    {/* <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/menu">Global Bank Admin Portal</Navbar.Brand>
      <div className="text-center">
        <Link
          to="/menu"
          className="text-light"
          style={{ textDecoration: "none", marginRight: 10 }}
        >
          Home
        </Link>
        <Button onClickCapture={logout} className="btn btn-light flex-start">
          logout
        </Button>
      </div>
    </Navbar> */}
  </>
);

const nonadmin = (
  <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/menu">Global Bank Admin Portal</Navbar.Brand>
      </Container>
    </Navbar>
  </>
);
function ColorSchemesExample() {
  return <>{b ? admin : nonadmin}</>;
}

export default ColorSchemesExample;
