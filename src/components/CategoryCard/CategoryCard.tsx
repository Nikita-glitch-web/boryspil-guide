import { Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Category } from "../../data/categories";

export const CategoryCard = ({ category }: { category: Category }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/category/${category.id}`)}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        cursor: "pointer",
        transition: "0.2s",
        ":hover": { boxShadow: 6 },
      }}
    >
      <Box sx={{ marginRight: 2 }}>
        {category.icon && <category.icon />}
      </Box>
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6">{category.title}</Typography>
      </CardContent>
    </Card>
  );
};
