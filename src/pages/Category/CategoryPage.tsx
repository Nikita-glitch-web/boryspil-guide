import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import { categoryData } from "../../data/mockData";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { categories } from "../../data/categories";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import type { BaseCategoryItem, TransportItem, Stop } from "../../data/types";

export const CategoryPage = () => {
  const { id } = useParams<{ id?: string }>();

  const category = (id && categories.find((cat) => cat.id === id)) || null;
  const Icon =
    category && typeof category !== "string" ? category.icon : undefined;

  const [data, setData] = useState<BaseCategoryItem[] | TransportItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timeout = setTimeout(() => {
      if (!id || !(id in categoryData)) {
        setError("Категорія не знайдена або сталася помилка при завантаженні.");
        setData([]);
      } else {
        setData(categoryData[id]);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [id]);

  const findTransportMatches = () => {
    const lowerSearch = searchTerm.toLowerCase().trim();
    const searchWords = lowerSearch.split(/\s+/);

    return (data as TransportItem[]).filter((item) =>
      searchWords.every(
        (word) =>
          item.title.toLowerCase().includes(word) ||
          item.stops?.some((stop: Stop) =>
            stop.name.toLowerCase().includes(word)
          )
      )
    );
  };

  const renderStopInfo = () => {
    if (id !== "transport") return null;

    const lowerSearch = searchTerm.toLowerCase().trim();
    if (!lowerSearch) return null;

    const searchWords = lowerSearch.split(/\s+/);

    const match = (data as TransportItem[]).find((item) =>
      searchWords.every(
        (word) =>
          item.title.toLowerCase().includes(word) ||
          item.stops?.some((stop: Stop) =>
            stop.name.toLowerCase().includes(word)
          )
      )
    );

    if (!match) return null;

    const matchedStop = match.stops?.find((stop: Stop) =>
      searchWords.some((word) => stop.name.toLowerCase().includes(word))
    );

    if (matchedStop) {
      return (
        <Box mb={2}>
          <Typography variant="body1" color="primary">
            🚌 {match.title}: Автобус буде на зупинці "{matchedStop.name}" о{" "}
            {matchedStop.time}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box mb={2}>
          <Typography variant="body2" color="text.secondary">
            Зупинка не знайдена у {match.title}
          </Typography>
        </Box>
      );
    }
  };

  const filteredData =
    id === "transport" && searchTerm.trim() !== ""
      ? findTransportMatches()
      : (data as BaseCategoryItem[]).filter((item) =>
          `${item.title} ${item.subtitle ?? ""} ${item.phone ?? ""}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        {Icon && <Icon fontSize="large" color="primary" />}
        <Typography variant="h4" component="h1">
          {category?.title || (typeof id === "string" ? id.toUpperCase() : "")}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Пошук контактів, адреси або номеру..."
      />

      {renderStopInfo()}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {searchTerm.trim() !== "" && filteredData.length === 0 ? (
            <Typography variant="body1" color="text.secondary" mt={2}>
              Нічого не знайдено.
            </Typography>
          ) : (
            filteredData.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                phone={item.phone}
                mapUrl={item.mapUrl}
                schedule={item.schedule}
              />
            ))
          )}
        </>
      )}
    </Container>
  );
};
