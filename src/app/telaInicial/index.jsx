import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Button } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Colxx } from '../../components/reactstrap';
import ReactSwiper from '../../components/swiper';
import { get } from '../../axios';

export default function TelaInicial() {
  const history = useNavigate();

  const [homeArquivos, setHomeArquivos] = useState([]);
  const [userArquivos, setUserArquivos] = useState([]);

  useEffect(() => {
    get('arquivos/arquivos')
      .then(({ data: { home, userFiles } }) => {
        setHomeArquivos([...home]);
        setUserArquivos([...userFiles]);
      })
      .catch(() => {
        const teste = [
          {id: 1, nome: 'teste', cd: 1},
          {id: 2, nome: 'teste2', cd: 2},
          {id: 3, nome: 'teste3', cd: 3},
          {id: 4, nome: 'teste4', cd: 4},
          {id: 5, nome: 'nome longo longo de mais mds ta mto longo aaaaaaa', cd: 5},
          {id: 6, nome: 'teste6', cd: 6},
          {id: 7, nome: 'teste7', cd: 7},
          {id: 8, nome: 'teste8', cd: 8},
        ];

        setHomeArquivos([...teste])
        setUserArquivos([...teste])
        console.debug('err');
      });
  }, []);

  return (
    <Colxx>
      <Row>
        <Colxx xxs="3">
          <ReactSwiper>
            {homeArquivos.slice(0, 5).map(({ id, nome, cd }) => {
              return (
                <div
                  key={`home_arquivo_${id}`}
                  className="c-pointer w-100 h-100"
                  onClick={() => {
                    history(`app/arquivo?id=${id}`);
                  }}
                >
                  <div className="h-85">
                    <img
                      src={`http://localhost:8081/api/arquivos/thumbnail/${cd}`}
                      alt="thumbnail"
                    />
                  </div>
                  <div className='text-nowrap text-truncate'>
                    {nome}
                  </div>
                </div>
              );
            })}
          </ReactSwiper>
        </Colxx>
        <Colxx xxs="9">
          <Row className="h-100">
            <Colxx xxs="4" className='d-flex flex-column align-items-center'>
              <div className="mb-4">Seus arquivos enviados</div>
              <Button onClick={() => history('app/arquivo')}>Adicionar novo</Button>
            </Colxx>
            <Colxx xxs="8">
              <PerfectScrollbar className='w-100 h-75 px-2 pt-2'>
                <Row className='h-100 flex-nowrap'>
                  {userArquivos.map(({ id, nome, cd }) => {
                    return (
                      <Colxx key={`user_arquivo_${id}`} xxs="4" className='h-100'>
                        <Card
                          className='w-100 h-85 p-2 c-pointer'
                          onClick={() => {
                            history(`app/arquivo?id=${id}`);
                          }}
                        >
                          <img
                            className='w-100 h-100'
                            src={`http://localhost:8081/api/arquivos/thumbnail/${cd}`}
                            alt="thumbnail"
                          />
                        </Card>
                        <div className='text-center text-nowrap text-truncate'>
                          {nome}
                        </div>
                      </Colxx>
                    );
                  })}
                </Row>
              </PerfectScrollbar>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </Colxx>
  );
}
