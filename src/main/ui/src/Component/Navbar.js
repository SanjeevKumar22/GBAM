import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const user=localStorage.getItem('isAuthenticated')
const admin =(<>
     
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Bank Admin Portal</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/menu">Home</Nav.Link>
        
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
            
            
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
)
function ColorSchemesExample() {
  
  return ( user?admin:nonadmin
  )
}

export default ColorSchemesExample;