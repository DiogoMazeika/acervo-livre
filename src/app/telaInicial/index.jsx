import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/reactstrap';
import ReactSwiper from '../../components/swiper';
import { get } from '../../axios';

export default function TelaInicial() {
  const history = useNavigate();

  const [homeArquivos, setHomeArquivos] = useState([]);

  useEffect(() => {
    get('arquivos/arquivos').then(({ data }) => {
      setHomeArquivos([...data]);
    });
  }, []);

  return (
    <Colxx>
      <Row>
        <Colxx xxs="3">
          <ReactSwiper>
            {homeArquivos.map(({ id, nome }) => {
              return (
                <div
                  key={id}
                  className="c-pointer w-100 h-100"
                  onClick={() => {
                    history(`app/arquivo?id=${id}`);
                  }}
                >
                  <div className="h-85">
                    <img
                      src="http://localhost:8081/api/arquivos/thumbnail/1"
                      alt="img"
                    />
                  </div>
                  {nome}
                </div>
              );
            })}
          </ReactSwiper>
        </Colxx>
        <Colxx xxs="9">alguma coisa aqui</Colxx>
      </Row>
    </Colxx>
  );
}
