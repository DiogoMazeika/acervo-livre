import ReactSwitch from 'react-switch';

export default function RcSwitch({ onChange = () => {}, checked, ...props }) {
  return (
    <ReactSwitch
      width={32}
      height={20}
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={onChange}
      checked={checked}
      {...props}
    />
  );
}
