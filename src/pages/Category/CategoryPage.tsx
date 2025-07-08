import { useParams } from "react-router-dom";
import { Container, Typography, Box, Divider } from "@mui/material";
import { useState } from "react";
import { categoryData } from "../../data/mockData";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { categories } from "../../data/categories";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = categoryData[id || ""] || [];

  const category = categories.find((cat) => cat.id === id);
  const Icon = category?.icon;

  const [searchTerm, setSearchTerm] = useState("");

  // Функція для пошуку маршрутів (для id === 'transport')
  const findTransportMatches = () => {
    const lowerSearch = searchTerm.toLowerCase().trim();
    if (!lowerSearch) return [];

    const searchWords = lowerSearch.split(/\s+/);

    // Фільтруємо маршрути, де всі слова є або в назві маршруту, або в зупинках
    return data.filter((item) =>
      searchWords.every(
        (word) =>
          item.title.toLowerCase().includes(word) ||
          item.stops?.some((stop) => stop.name.toLowerCase().includes(word))
      )
    );
  };

  // Для показу інфо про зупинку (якщо введено кілька слів)
  const renderStopInfo = () => {
    if (id !== "transport") return null;

    const lowerSearch = searchTerm.toLowerCase().trim();
    if (!lowerSearch) return null;

    const searchWords = lowerSearch.split(/\s+/);

    // Знаходимо перший маршрут, що містить всі слова
    const match = data.find((item) =>
      searchWords.every(
        (word) =>
          item.title.toLowerCase().includes(word) ||
          item.stops?.some((stop) => stop.name.toLowerCase().includes(word))
      )
    );

    if (!match) return null;

    // Знаходимо зупинку, яка містить хоча б одне зі слів пошуку
    const matchedStop = match.stops?.find((stop) =>
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

  // Вибираємо дані для рендеру:
  // Якщо transport - фільтруємо за новою логікою, інакше звичайний фільтр по title, subtitle, phone
  const filteredData =
    id === "transport" && searchTerm.trim() !== ""
      ? findTransportMatches()
      : data.filter((item) =>
          `${item.title} ${item.subtitle ?? ""} ${item.phone ?? ""}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        {Icon && <Icon fontSize="large" color="primary" />}
        <Typography variant="h4" component="h1">
          {category?.title || id?.toUpperCase()}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Пошук контактів, адреси або номеру..."
      />

      {renderStopInfo()}

      {searchTerm.trim() !== "" && filteredData.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
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
    </Container>
  );
};
