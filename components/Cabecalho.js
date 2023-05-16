import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/academico">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="#features">Disciplinas</Nav.Link>
            <Nav.Link href="#pricing">Alunos</Nav.Link>
            <Nav.Link href="#pricing">Professores</Nav.Link>
            <Nav.Link href="#pricing">Turmas</Nav.Link>
            <Nav.Link href="#pricing">Salas</Nav.Link>
            <Nav.Link href="#pricing">Semestre</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho