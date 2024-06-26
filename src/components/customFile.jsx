import { Input, Label } from 'reactstrap';
import Svg from './svg';

export default function CustomFile({ file = {}, onChange = () => {} }) {
  return (
    <div className={`container_input-file ${file.id ? 'border-0' : 'max'}`}>
      <Label
        for="file"
        className={`w-f h-100 d-flex ${
          file.id ? '' : 'justify-content-center'
        } align-items-center mb-0 c-pointer`}
      >
        {file.id ? (
          <img
            className="h-100"
            src={`http://localhost:8081/api/arquivos/thumbnail/${file.id}`}
            alt="img"
          />
        ) : (
          <Svg icon="AttachFile" />
        )}
      </Label>
      <Input onChange={onChange} type="file" id="file" />
    </div>
  );
}
