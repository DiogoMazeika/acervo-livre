import { Col } from "reactstrap";

function Colxx({ className = "", ...props }) {
  return (
    <Col
      {...props}
      className={className}
      widths={["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]}
    />
  );
}

export { Colxx };
