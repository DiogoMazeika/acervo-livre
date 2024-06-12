import { useEffect, useState } from 'react';
import { Badge, Input, Modal, ModalBody } from 'reactstrap';

export default function ModalTags({ tags, isOpen, close }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [noSelectedTags, setNoSelectedTags] = useState([]);
  const [filtro, setFiltro] = useState('');
  // const [noFiltro, setNoFiltro] = useState('');

  useEffect(() => {
    setNoSelectedTags(tags);
  }, [tags]);

  const addTag = (tag, id) => {
    setSelectedTags((l) => {
      const aux = [...l];
      // if (id === -1) aux.push({ id: `novo_${Date.now()}`, nome: filtro });
      // else
      aux.push(tag);

      return aux;
    });

    // if (id !== -1) {
    setNoSelectedTags((l) => {
      const aux = [...l];
      const i = aux.findIndex((t) => t.id === id);
      aux.splice(i, 1);

      return aux;
    });
    // } else setNoFiltro(filtro);
  };

  const rmvTag = (tag, i) => {
    setNoSelectedTags((l) => {
      const aux = [...l];
      aux.push(tag);

      return aux;
    });

    setSelectedTags((l) => {
      const aux = [...l];
      aux.splice(i, 1);

      return aux;
    });
  };

  return (
    <Modal
      // modalClassName="d-flex align-items-center justify-content-center"
      contentClassName="w-50 h-50"
      isOpen={isOpen}
      toggle={close}
    >
      <ModalBody>
        <Input onChange={({ target: { value } }) => setFiltro(value)} />
        <div className="mb-3 border-bottom">
          <div className="d-flex flex-wrap my-1">
            {selectedTags
              // .sort((a, b) => a.nome > b.nome)
              .map((tag, i) => {
                const { id, nome } = tag;
                return (
                  <div key={`tag_${id}`} className="px-1">
                    <Badge
                      color="primary"
                      className="c-pointer d-flex my-1"
                      onClick={() => rmvTag(tag, i)}
                    >
                      <div>{nome}</div>
                      <div className="ml-3">X</div>
                    </Badge>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="d-flex">
          {noSelectedTags
            .filter(
              ({ nome }) =>
                (filtro === '' && nome != null) || nome?.includes(filtro)
              // || (filtro !== '' && nome == null && filtro !== noFiltro)
            )
            .sort((a, b) => a.nome > b.nome)
            .map((tag, i) => {
              const { id, nome } = tag;
              // if (id === -1 && i !== 0) return null;
              return (
                <div key={`tag_${id}`} className="px-1">
                  <Badge
                    color="primary"
                    className="c-pointer"
                    onClick={() => addTag(tag, id)}
                  >
                    {nome ?? filtro}
                  </Badge>
                </div>
              );
            })}
        </div>
      </ModalBody>
    </Modal>
  );
}
