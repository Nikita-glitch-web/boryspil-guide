import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import type { ElectricTrainRoute, TrainStop } from "../../data/types";

interface TrainCardProps {
  item: ElectricTrainRoute;
}

export const TrainCard = ({ item }: TrainCardProps) => {
  return (
    <Card sx={{ mb: 2, borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="primary">
            🚆 {item.title}
          </Typography>
          <Chip
            label={item.direction === "forward" ? "Туди" : "Назад"}
            color={item.direction === "forward" ? "primary" : "secondary"}
            variant="outlined"
          />
        </Box>

        {item.subtitle && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            {item.subtitle}
          </Typography>
        )}

        <Divider sx={{ my: 2 }} />

        {item.stops.map((stop: TrainStop, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 0.5 }}
          >
            <Box>
              <Typography>
                {stop.name}
                {stop.platform && (
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    (платформа {stop.platform})
                  </Typography>
                )}
              </Typography>
            </Box>

            <Box textAlign="right">
              {stop.arrival && (
                <Typography variant="caption" color="text.secondary">
                  Прибуття: {stop.arrival}
                </Typography>
              )}
              {stop.departure && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                >
                  Відправлення: {stop.departure}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
