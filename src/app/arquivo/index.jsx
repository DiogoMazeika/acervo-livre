import { useNavigate } from 'react-router-dom';
import { Button, Row } from 'reactstrap';
import { Colxx } from '../../components/generic/reactstrap';

export default function Arquivo() {
  const history = useNavigate();
  return (
    <Row>
      <Colxx xxs="8">Arquivo</Colxx>
      <Colxx xxs="4">
        <Row className="justify-content-end">
          <Colxx xxs="3">
            <Button color="primary" onClick={() => {}}>
              Salvar
            </Button>
          </Colxx>
          <Colxx xxs="3">
            <Button color="primary" outline onClick={() => history(-1)}>
              Voltar
            </Button>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
}
