import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Row } from 'reactstrap';
import { Colxx } from '../../components/reactstrap';
import ReactSwiper from '../../components/swiper';
import { get } from '../../axios';

export default function TelaInicial() {
  const history = useNavigate();

  const [homeArquivos, setHomeArquivos] = useState([]);

  useEffect(() => {
    get('arquivos/arquivos')
      .then(({ data }) => {
        setHomeArquivos([...data]);
      })
      .catch(() => {
        console.debug('err');
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
        <Colxx xxs="9">
          <Row className="h-100">
            <Colxx xxs="4">
              <div className="text-center">Seus arquivos enviados</div>
            </Colxx>
            <Colxx xxs="8">
              <Row>
                <Colxx xxs="4">
                  <Card>
                    <CardBody>teste</CardBody>
                  </Card>
                </Colxx>
                <Colxx xxs="4">
                  <Card>
                    <CardBody>teste</CardBody>
                  </Card>
                </Colxx>
                <Colxx xxs="4">
                  <Card>
                    <CardBody>teste</CardBody>
                  </Card>
                </Colxx>
                <Colxx xxs="4">
                  <Card>
                    <CardBody>teste</CardBody>
                  </Card>
                </Colxx>
              </Row>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </Colxx>
  );
}
