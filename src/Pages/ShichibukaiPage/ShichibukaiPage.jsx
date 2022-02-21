import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ShichibukaiProvider } from '../../Providers/ShichibukaiProvider'

export default function ShichibukaiPage() {
  const [shichibukai, setShichibukai] = useState([])
  const ShichibukaiProviders = new ShichibukaiProvider()

  useEffect(() => {
    let datas = ShichibukaiProviders.getShichibukai()
    setShichibukai(datas)
  }, [])

  function remove(shichibukai) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer le ${shichibukai.prenom} ${shichibukai.nom}`
    )
    if (rep) {
      ShichibukaiProviders.remove(shichibukai)
      let datas = ShichibukaiProviders.getShichibukai()
      setShichibukai(datas)
    }
  }

  let displayShichibukai = shichibukai.map((shichibukai, indice) => {
    return (
      <Container key={indice + 1}>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={shichibukai.photo} />
            <Card.Body>
              <Card.Title>
                {shichibukai.prenom} {shichibukai.nom}
              </Card.Title>
              <Card.Text>
                Commentaire personnalisé : {shichibukai.commentaire}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Prime : {shichibukai.prime}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button
                as={Link}
                to={'/shichibukai/' + shichibukai.id}
                variant="warning"
              >
                Modifier
              </Button>
              <Button variant="danger" onClick={() => remove(shichibukai)}>
                Supprimer
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    )
  })
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Gestion des Shichibukais</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="mb-3">
              <Button as={Link} to="/shichibukai/add">
                Ajouter un shichibukai
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <br></br>
      {displayShichibukai}
    </>
  )
}
