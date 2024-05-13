import { Row } from "reactstrap";
import { Colxx } from "../components/generic/reactstrap";
import ReactSwiper from "../components/generic/swiper";
import { useNavigate } from "react-router-dom";

export default function TelaInicial() {
  const history = useNavigate();
  return (
    <Colxx>
      <Row>
        <Colxx xxs="5">
          <ReactSwiper>
            <div
              className="c-pointer w-100 h-100"
              onClick={() => {
                history("aasdsad");
              }}
            >
              img1
            </div>
            <div
              className="c-pointer w-100 h-100"
              onClick={() => {
                history("aasdsad");
              }}
            >
              img2
            </div>
            <div
              className="c-pointer w-100 h-100"
              onClick={() => {
                history("aasdsad");
              }}
            >
              img3
            </div>
            <div
              className="c-pointer w-100 h-100"
              onClick={() => {
                history("aasdsad");
              }}
            >
              img4
            </div>
            <div
              className="c-pointer w-100 h-100"
              onClick={() => {
                history("aasdsad");
              }}
            >
              img5
            </div>
          </ReactSwiper>
        </Colxx>
        <Colxx xxs="7">alguma coisa aqui</Colxx>
      </Row>
    </Colxx>
  );
}
