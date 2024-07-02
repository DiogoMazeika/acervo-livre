import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, Input, Label, Row } from "reactstrap";
import { Colxx } from "../../components/reactstrap";
import { post } from "../../axios";

export default function NovoUsuario () {
	const history = useNavigate();
	const [dados, setDados] = useState({
			nome: '', login: '', senha: '', senha2: '',
	});

	const update = (campo, valor) => setDados((d) => ({ ...d, [campo]: valor }));

	const salvar = () => {
		post('usuario/usuario', dados).then(() => {
			history('/login');
		})
	};

	return (
		<div className="w-100 h-100 d-flex justify-content-center align-items-center">
			<Card className="w-50">
				<CardBody>
					<Row>
						<Colxx xxs="12">
							<Row>
								<Colxx xxs="12" className="my-2">
									<Label>Nome</Label>
									<Input
										onChange={({ target: { value } }) => update('nome', value)}
									/>
								</Colxx>
								<Colxx xxs="12" className="my-2">
									<Label>Login</Label>
									<Input
										onChange={({ target: { value } }) => update('login', value)}
									/>
								</Colxx>
								<Colxx xxs="12" className="my-2">
									<Label>Senha</Label>
									<Input
										type="password"
										onChange={({ target: { value } }) => update('senha', value)}
									/>
								</Colxx>
								<Colxx xxs="12" className="my-2">
									<Label>Confirme a senha</Label>
									<Input
										type="password"
										onChange={({ target: { value } }) => update('senha2', value)}
									/>
								</Colxx>
								<Colxx xxs="12" className="my-2">
									<Button
										onClick={salvar}
									>
										Criar conta
									</Button>
								</Colxx>
							</Row>
						</Colxx>
					</Row>
					{/* <Row className="mt-4">
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
					</Row> */}
				</CardBody>
			</Card>
		</div>
	);
}