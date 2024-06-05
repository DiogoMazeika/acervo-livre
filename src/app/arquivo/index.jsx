import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, Row } from 'reactstrap';
import { Colxx } from '../../components/reactstrap';
import CustomFile from '../../components/customFile';
import { get, post, put } from '../../axios';
import { searchToMap } from '../../helpers';

export default function Arquivo() {
  const history = useNavigate();
  const { search } = useLocation();

  const [dados, setDados] = useState({ nome: '' });
  const [modoEdit, setModoEdit] = useState(false);

  useEffect(() => {
    const { id } = searchToMap(search);

    if (id) {
      get('arquivos/arquivo', { id }).then(({ data }) => setDados({ ...data }));
    } else {
      setDados({ nome: '' });
    }
  }, [search]);

  useEffect(() => {
    setModoEdit(true);
  }, []);

  const update = (campo, valor) => setDados((o) => ({ ...o, [campo]: valor }));

  const teste = ({ target: { files } }) => {
    console.debug(files[0]);
    post(
      'arquivos/uploadTemp',
      { file: files[0] },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }
      );
  };

  const salvar = async () => {
    if (dados.id) {
      await put('arquivos/arquivo', dados);
    } else {
      await post('arquivos/arquivo', dados);
    }
    history(-1);
  };

  return (
    <>
      <Row>
        <Colxx xxs="8" className="h2">
          <div className="d-flex">
            <div className="w-40">
              {modoEdit ? (
                <Input
                  value={dados.nome}
                  onChange={({ target: { value } }) => update('nome', value)}
                />
              ) : dados.nome === '' ? (
                'Arquivo sem nome'
              ) : (
                dados.nome
              )}
            </div>
          </div>
        </Colxx>
        <Colxx xxs="4">
          <Row className="justify-content-end">
            <Colxx xxs="3">
              <Button color="primary" onClick={salvar}>
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
      <Row>
        <Colxx>
          <CustomFile onChange={teste} />
        </Colxx>
      </Row>
    </>
  );
}
