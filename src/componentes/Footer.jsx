import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <Container className="">
        <Navbar bg="success" variant="dark fixed-bottom p-1 d-flex">
            <p className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">&copy; Buenos Aires - Zona sur </p>
            <Link href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
            </Link>
            <Nav className="justify-content-end fs-6">
                <Link className='nav-link' to="articulos">Premios</Link>
                <Link className='nav-link' to="recomendado">Lista de equipos</Link>
                <Link className='nav-link' to="formulario">inscripcion</Link>
            </Nav>
            
        </Navbar>
    </Container>
    );
}

export default Footer;
