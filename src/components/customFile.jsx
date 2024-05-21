import { Input, Label } from 'reactstrap';
import Svg from './svg';

export default function CustomFile() {
  const teste = ({ target: { files } }) => {
    console.debug(files[0]);
  };
  return (
    <div className="container_input-file">
      <Label
        for="file"
        className="w-100 h-100 d-flex justify-content-center align-items-center mb-0 c-pointer"
      >
        <Svg icon="AttachFile" />
      </Label>
      <Input onChange={teste} type="file" id="file" />
    </div>
  );
}
