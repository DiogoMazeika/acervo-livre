import * as icons from "@mui/icons-material";

export default function Svg({ icon, ...props }) {
  const Icon = icons[icon];

  // if (Icon) return <Icon fontSize="small" />;
  if (Icon) return <Icon {...props} />;
  return null;
}
