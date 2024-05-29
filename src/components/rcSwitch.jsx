import ReactSwitch from 'react-switch';
import Svg from './svg';

export default function RcSwitch({
  checked,
  checkedIcon,
  uncheckedIcon,
  onChange = () => {},
  ...props
}) {
  return (
    <ReactSwitch
      // width={32}
      width={40}
      height={24}
      handleDiameter={16}
      // height={20}
      onColor="#dda534"
      checkedIcon={
        checkedIcon ? (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <Svg icon={checkedIcon} sx={{ fontSize: 18 }} />
          </div>
        ) : (
          false
        )
      }
      uncheckedIcon={
        uncheckedIcon ? (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <Svg icon={uncheckedIcon} sx={{ fontSize: 18 }} />
          </div>
        ) : (
          false
        )
      }
      onChange={onChange}
      checked={checked}
      {...props}
    />
  );
}
