import { useEffect, useState } from 'react';
import { Badge, Input, Modal, ModalBody } from 'reactstrap';

export default function ModalTags({
  tags,
  isOpen,
  selectedTags,
  setSelectedTags,
  close,
}) {
  const [noSelectedTags, setNoSelectedTags] = useState([]);
  const [filtro, setFiltro] = useState('');
  // const [noFiltro, setNoFiltro] = useState('');

  useEffect(() => {
    setFiltro('');
    setNoSelectedTags([
      ...tags.filter(({ id }) => !selectedTags.map((t) => t.id).includes(id)),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, tags]);

  const addTag = (tag, id) => {
    const aux = [...selectedTags];
    // if (id === -1) aux.push({ id: `novo_${Date.now()}`, nome: filtro });
    // else
    aux.push(tag);

    setSelectedTags(aux);

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

    const aux = [...selectedTags];
    aux.splice(i, 1);

    setSelectedTags(aux);
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
                (filtro === '' && nome != null) ||
                nome?.toLowerCase()?.includes(filtro.toLowerCase())
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
