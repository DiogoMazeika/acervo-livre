import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, Row } from 'reactstrap';
import { Colxx } from '../../components/reactstrap';
import CustomFile from '../../components/customFile';
import { get, post, put, del } from '../../axios';
import { searchToMap } from '../../helpers';
import ModalTags from './modalTags';

export default function Arquivo() {
  const history = useNavigate();
  const { search } = useLocation();

  const [dados, setDados] = useState({ nome: '' });
  const [tags, setTags] = useState([]);
  const [modoEdit, setModoEdit] = useState(false);
  const [modalTagsOpen, setModalTagsOpen] = useState(false);

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

  useEffect(() => {
    get('arquivos/tags').then(({ data }) => setTags(data));
  }, []);

  const update = (campo, valor) => setDados((o) => ({ ...o, [campo]: valor }));

  const uploadTemp = ({ target: { files } }) => {
    const [file] = files;
    post(
      'arquivos/uploadFile',
      { file },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    ).then(({ data }) => {
      const promises = [];
      if (dados.file) {
        promises.push(del('arquivos/deleteFile', { file: dados.file }));
      }

      Promise.all(promises).then(() => {
        update('file', { ...data, original: file.name });
      });
    });
    // });
  };

  console.debug(dados);

  const salvar = async () => {
    let { id } = dados;

    if (id) {
      await put('arquivos/arquivo', dados);
    } else {
      id = await post('arquivos/arquivo', dados).then(({ data }) => data);
    }
    // history(-1);
  };

  return (
    <>
      <Row>
        <Colxx xxs="8" className="h2">
          <div className="d-flex">
            <div className="w-50">
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
        <Colxx xxs="12">
          <div className="mw-40">
            <CustomFile file={dados.file} onChange={uploadTemp} />
          </div>
        </Colxx>
      </Row>
      <Row className="mt-4">
        <Colxx>
          <Button onClick={() => setModalTagsOpen(true)}>Tags</Button>
        </Colxx>
        <ModalTags
          tags={tags}
          isOpen={modalTagsOpen}
          close={() => setModalTagsOpen(false)}
          selectedTags={dados.tags ?? []}
          setSelectedTags={(vl) => update('tags', vl)}
        />
      </Row>
    </>
  );
}
