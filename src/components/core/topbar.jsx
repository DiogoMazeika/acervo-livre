import { useEffect, useState } from 'react';
import { DropdownItem, DropdownMenu, Row, Dropdown } from 'reactstrap';
import { Colxx } from '../reactstrap';
import RcSwitch from '../rcSwitch';
import Svg from '../svg';

export default function Topbar() {
  const [switchTheme, setSwitchTheme] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.className = switchTheme ? 'dark-mode' : '';
  }, [switchTheme]);

  return (
    <div id="main-topbar">
      <Row className="h-100 align-items-center">
        <Colxx xxs="3">
          <Svg
            icon="Menu"
            className="c-pointer"
            onClick={() => setDropdownOpen((o) => !o)}
          />
          <Dropdown isOpen={dropdownOpen}>
            <DropdownMenu>
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Colxx>
        <Colxx xxs="6" className="h-100">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              src="http://localhost:8081/api/arquivos/thumbnail/logo"
              alt="logo"
              className="mh-100"
            />
            <div className="h1">Acervo Livre</div>
          </div>
        </Colxx>
        <Colxx xxs="3">
          <div className="d-flex justify-content-end">
            <RcSwitch
              checkedIcon="DarkMode"
              uncheckedIcon="LightMode"
              checked={switchTheme}
              onChange={() => setSwitchTheme((o) => !o)}
            />
          </div>
        </Colxx>
      </Row>
    </div>
  );
}
