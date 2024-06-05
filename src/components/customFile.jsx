import { Input, Label } from 'reactstrap';
import Svg from './svg';

export default function CustomFile({ onChange = () => {} }) {
  return (
    <div className="container_input-file">
      <Label
        for="file"
        className="w-100 h-100 d-flex justify-content-center align-items-center mb-0 c-pointer"
      >
        <Svg icon="AttachFile" />
      </Label>
      <Input onChange={onChange} type="file" id="file" />
    </div>
  );
}
