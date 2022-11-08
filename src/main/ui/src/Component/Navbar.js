import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
var user=localStorage.getItem('isAuthenticated');
var b=false;
if(user==="true")
 b=true;
 else
 b=false;
console.log("navbar",user)
const logout=()=> {
    localStorage.setItem("isAuthenticated", "false");
    window.location.pathname = "/";
}
console.log("b",b)
const admin =(<>
     
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Bank Admin Portal</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/menu">Home</Nav.Link>
        <button onClickCapture={logout}>logout</button> 
      </Nav>
    </Container>
  </Navbar>

  <br />
  
</>);

const nonadmin=(
  <>
     
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bank Admin Portal</Navbar.Brand>
          <Nav className="me-auto">
        {/* <button onClickCapture={logout}>logout</button> */}
            
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
)
function ColorSchemesExample() {
  
  return ( 
    <>
    {b?admin:nonadmin}
      </>
  )
}

export default ColorSchemesExample;