import * as icons from '@mui/icons-material';

export default function Svg({ icon, ...props }) {
  // fonte: https://mui.com/material-ui/material-icons/
  const Icon = icons[icon];

  if (Icon) return <Icon {...props} />;
  return null;
}
