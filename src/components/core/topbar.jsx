import { Row } from "reactstrap";
import ReactSwitch from "react-switch";
import { Colxx } from "../generic/reactstrap";

export default function Topbar() {
  return (
    <div id="main-topbar">
      <Row>
        <Colxx xxs="8">teste 1</Colxx>
        <Colxx xxs="4" className="d-flex align-items-center">
          <ReactSwitch
            width={32}
            height={20}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={() => {
              console.debug("object");
            }}
          />
        </Colxx>
      </Row>
    </div>
  );
}
