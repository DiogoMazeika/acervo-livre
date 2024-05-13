import { useState } from "react";
import { Row } from "reactstrap";
import { Colxx } from "../generic/reactstrap";
import RcSwitch from "../generic/rcSwitch";
import Svg from "../generic/svg";

export default function Topbar() {
  const [switchTheme, setSwitchTheme] = useState(false);
  return (
    <div id="main-topbar">
      <Row>
        <Colxx xxs="7">
          <Row className="h-100 align-items-center">
            <Colxx xxs="2">
              <Svg icon="DarkMode" />
            </Colxx>
            <Colxx xxs="10" className="d-flex align-items-center">
              <div className="h1 mb-0">Acervo Livre</div>
            </Colxx>
          </Row>
        </Colxx>
        <Colxx
          xxs="5"
          className="d-flex align-items-center justify-content-end"
        >
          <RcSwitch
            checkedIcon="DarkMode"
            uncheckedIcon="LightMode"
            checked={switchTheme}
            onChange={() => setSwitchTheme((o) => !o)}
          />
        </Colxx>
      </Row>
    </div>
  );
}
