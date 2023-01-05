import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar className='avbar bg-transparent navbar-dark navbar-light navbar-expand-lg' bg="transparent"  expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div style = {{display:'flex', flexDirection:'row', alignItems:'center', justifyItems:'center', justifyContent:'center', alignContent:'center'}}>
            <img
                src="/assets/images/logo.png"
                style={{width:'10vh', height:'auto'}}
            />
            <h3 style={{marginLeft:'5%', fontStyle:'italic', fontWeight:'100'}}>Juan Londoño</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;



//n