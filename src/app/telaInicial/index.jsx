import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/generic/reactstrap';
import ReactSwiper from '../../components/generic/swiper';

export default function TelaInicial() {
  const history = useNavigate();

  const [homeArquivos, setHomeArquivos] = useState([]);

  useEffect(() => {
    const aux = [{ id: 1 }];
    setHomeArquivos([...aux]);
  }, []);

  return (
    <Colxx>
      <Row>
        <Colxx xxs="5">
          <ReactSwiper>
            {homeArquivos.map(({ id }) => {
              return (
                <div
                  key={id}
                  className="c-pointer w-100 h-100"
                  onClick={() => {
                    history('app/arquivo');
                  }}
                >
                  img
                </div>
              );
            })}
          </ReactSwiper>
        </Colxx>
        <Colxx xxs="7">alguma coisa aqui</Colxx>
      </Row>
    </Colxx>
  );
}
