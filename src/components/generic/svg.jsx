import * as icons from '@mui/icons-material';

export default function Svg({icon}) {
  const Icon = icons[icon];

  if (Icon) return <Icon />;
  return null;
}
