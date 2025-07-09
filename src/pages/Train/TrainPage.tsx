import {
  Box,
  Container,
  Divider,
  Typography,
  CircularProgress,
  Alert,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Trains } from "../../data/trainData";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import type { ElectricTrainRoute } from "../../data/types";
import { TrainCard } from "../../components/TrainCard/TrainCard";

export const TrainPage = () => {
  const [data, setData] = useState<ElectricTrainRoute[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timeout = setTimeout(() => {
      if (!Trains || Trains.length === 0) {
        setError("Дані про електрички не знайдено.");
        setData([]);
      } else {
        setData(Trains);
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  const handleDirectionChange = (
    _: React.MouseEvent<HTMLElement>,
    newDirection: "forward" | "backward" | null
  ) => {
    if (newDirection) {
      setDirection(newDirection);
    }
  };

  const filtered = data
    .filter((train) => train.direction === direction)
    .filter((train) => {
      const q = searchTerm.toLowerCase();
      return (
        train.title.toLowerCase().includes(q) ||
        train.stops.some(
          (stop) =>
            q &&
            (stop.name.toLowerCase().includes(q) ||
              stop.arrival?.toLowerCase().includes(q) ||
              stop.departure?.toLowerCase().includes(q) ||
              stop.platform?.toLowerCase().includes(q))
        )
      );
    });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        🚆 Електрички ({direction === "forward" ? "Туди" : "Назад"})
      </Typography>

      <ToggleButtonGroup
        value={direction}
        exclusive
        onChange={handleDirectionChange}
        sx={{ mb: 2 }}
        size="small"
      >
        <ToggleButton value="forward">Туди</ToggleButton>
        <ToggleButton value="backward">Назад</ToggleButton>
      </ToggleButtonGroup>

      <Divider sx={{ mb: 2 }} />

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Пошук за зупинкою, часом або платформою..."
      />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : filtered.length === 0 ? (
        <Typography variant="body1" color="text.secondary" mt={2}>
          Нічого не знайдено.
        </Typography>
      ) : (
        filtered.map((train, index) => <TrainCard key={index} item={train} />)
      )}
    </Container>
  );
};
