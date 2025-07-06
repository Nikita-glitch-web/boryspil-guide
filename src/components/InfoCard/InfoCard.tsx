import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

interface Props {
  title: string;
  subtitle?: string;
  phone?: string;
}

export const InfoCard = ({ title, subtitle, phone }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap={1}
        >
          <Box>
            <Typography variant="h6">{title}</Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
          {phone && (
            <IconButton color="primary" href={`tel:${phone}`}>
              <CallIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
