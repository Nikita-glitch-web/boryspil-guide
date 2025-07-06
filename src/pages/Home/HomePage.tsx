import { Container, Typography, Box } from "@mui/material";
import { categories } from "../../data/categories";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { MapView } from "../../components/Map/MapView";

export const HomePage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Boryspil Guide
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: { xs: "center", sm: "space-around" },
          mb: 4,
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              width: { xs: "100%", sm: "47%", md: "30%" },
              minWidth: 250,
            }}
          >
            <CategoryCard category={category} />
          </Box>
        ))}
      </Box>

      <Typography variant="h5" gutterBottom>
        Мапа важливих точок
      </Typography>

      <Box
        sx={{
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
          marginBottom: "40px",
        }}
      >
        <MapView />
      </Box>
    </Container>
  );
};
