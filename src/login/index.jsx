import { Button, Card, CardBody, Input, Label, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Colxx } from '../components/reactstrap';
import { useState } from 'react';
import { post } from '../axios';

export default function Login() {
  const history = useNavigate();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    post('usuario/login', { l: login, s: senha }).then(({data: { ok }}) => {
      if (ok) history('/app');
    })
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className="w-50 h-50">
        <CardBody>
          <Row>
            <Colxx xxs="8">
              <Row>
                <Colxx xxs="12" className="my-2">
                  <Label>Login</Label>
                  <Input
                    onChange={({ target: { value } }) => setLogin(value)}
                  />
                </Colxx>
                <Colxx xxs="12" className="my-2">
                  <Label>Senha</Label>
                  <Input
                    onChange={({ target: { value } }) => setSenha(value)}
                  />
                </Colxx>
              </Row>
            </Colxx>
            <Colxx xxs="4">
              <div className="w-100 h-100 d-flex align-items-center">
                <img
                  src="http://localhost:8081/api/arquivos/thumbnail/logo"
                  alt="logo"
                  className="w-100"
                />
              </div>
            </Colxx>
          </Row>
          <Row className="mt-4">
            <Colxx xxs="8">
              <Button onClick={logar}>Entrar</Button>
            </Colxx>
            <Colxx xxs="4" className='d-flex justify-content-end'>
              <Button
                onClick={() => history(`/login/cadastro`)}
              >
                Criar conta
              </Button>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}
