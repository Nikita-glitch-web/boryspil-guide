import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Stack,
  Tooltip,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from "@mui/icons-material/Map";

interface Props {
  title: string;
  subtitle?: string;
  phone?: string;
  mapUrl?: string;
  schedule?: string[];
}

export const InfoCard = ({
  title,
  subtitle,
  phone,
  mapUrl,
  schedule,
}: Props) => {
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

            {schedule && schedule.length > 0 && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Розклад: {schedule.join(", ")}
              </Typography>
            )}
          </Box>

          <Stack direction="row" spacing={1}>
            {phone && (
              <Tooltip title="Зателефонувати">
                <IconButton color="primary" href={`tel:${phone}`}>
                  <CallIcon />
                </IconButton>
              </Tooltip>
            )}

            {mapUrl && (
              <Tooltip title="Відкрити в Google Maps">
                <IconButton
                  color="secondary"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapIcon />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
