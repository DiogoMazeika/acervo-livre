import { Input, Label } from 'reactstrap';
import Svg from './svg';

export default function CustomFile({ file = {}, onChange = () => {} }) {
  return (
    <div className={`container_input-file ${file.cd ? 'border-0' : 'max'}`}>
      <Label
        for="file"
        className={`h-100 d-flex ${
          file.cd ? 'w-f' : 'w-100 justify-content-center'
        } align-items-center mb-0 c-pointer`}
      >
        {file.cd ? (
          <img
            className="h-100"
            src={`http://localhost:8081/api/arquivos/thumbnail/${file.cd}`}
            alt="img"
          />
        ) : (
          <Svg icon="AttachFile" />
        )}
      </Label>
      <Input
        onChange={onChange}
        type="file"
        id="file"
        accept="application/pdf"
      />
    </div>
  );
}
