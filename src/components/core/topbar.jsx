import { useState } from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../generic/reactstrap';
import RcSwitch from '../generic/rcSwitch';
// import Svg from '../generic/svg';

export default function Topbar() {
  const [switchTheme, setSwitchTheme] = useState(false);
  return (
    <div id="main-topbar">
      <Row>
        <Colxx xxs="8">
          <Row className="h-100 align-items-center">
            <Colxx xxs="2">-{/* <Svg icon="DarkMode" /> */}</Colxx>
            <Colxx xxs="10" className="d-flex align-items-center">
              <div className="h3 mb-0">Acervo Online</div>
            </Colxx>
          </Row>
        </Colxx>
        <Colxx xxs="4" className="d-flex align-items-center">
          <RcSwitch
            checked={switchTheme}
            onChange={() => setSwitchTheme((o) => !o)}
          />
        </Colxx>
      </Row>
    </div>
  );
}
