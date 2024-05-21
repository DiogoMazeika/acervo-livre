import { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../reactstrap';
import RcSwitch from '../rcSwitch';
import Svg from '../svg';
import logo from '../../logo.svg';

export default function Topbar() {
  const [switchTheme, setSwitchTheme] = useState(false);

  useEffect(() => {
    document.body.className = switchTheme ? 'dark-mode' : '';
  }, [switchTheme]);

  return (
    <div id="main-topbar">
      <Row className="h-100 align-items-center">
        <Colxx xxs="4">
          {/* <Svg icon="AutoStories" /> */}
          <img src={logo} className="w-10" alt="logo" />
        </Colxx>
        <Colxx xxs="4">
          <div className="h1 text-center">Acervo Livre</div>
        </Colxx>
        <Colxx xxs="4">
          <Row>
            <Colxx>teste</Colxx>
            <Colxx>
              <RcSwitch
                checkedIcon="DarkMode"
                uncheckedIcon="LightMode"
                checked={switchTheme}
                onChange={() => setSwitchTheme((o) => !o)}
              />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </div>
  );
}
