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

  const filteredData = data.filter((item) =>
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
          />
        ))
      )}
    </Container>
  );
};
