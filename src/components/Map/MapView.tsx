import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmlraXRhMDUwNiIsImEiOiJjbWNxZGpmczEwZzV3Mmpxd3Y4b2JkbDVrIn0.-zYDmBAVT-YZfPStR-hDcw";

type Point = {
  id: number;
  title: string;
  address?: string;
  type?: string;
  coordinates: [number, number];
};

export const MapView = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [filterType, setFilterType] = useState<string>("all");

  const getMarkerElement = (type: string | undefined) => {
    const el = document.createElement("div");
    el.className = "custom-marker";
    el.style.width = "18px";
    el.style.height = "18px";

    const iconMap: Record<string, string> = {
      pharmacy: "/icons/pharmacy.png",
      hospital: "/icons/hospital.png",
      store: "/icons/store.png",
      police: "/icons/police.png",
      bank: "/icons/bank.png",
      fuel: "/icons/fuel.png",
      bus: "/icons/bus.png",
      park: "/icons/park.png",
      restaurant: "/icons/restaurant.png",
      culture: "/icons/culture.png",
      mall: "/icons/mall.png",
      raillway: "/icons/raillway.png",
      stadium: "/icons/stadium.png",
    };

    const iconUrl =
      type && iconMap[type] ? iconMap[type] : "/icons/default.png";

    el.style.backgroundImage = `url(${iconUrl})`;
    el.style.backgroundSize = "contain";
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundPosition = "center";

    return el;
  };

  useEffect(() => {
    fetch("/mapData.json")
      .then((res) => res.json())
      .then((data: Point[]) => setPoints(data))
      .catch((err) => console.error("Failed to load map data", err));
  }, []);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.957589, 50.347296],
      zoom: 13,
    });
  }, []);
  useEffect(() => {
    if (!map.current) return;

    const markerElements = document.querySelectorAll(".custom-marker");
    markerElements.forEach((el) => el.remove());

    const filteredPoints =
      filterType === "all"
        ? points
        : points.filter((p) => p.type === filterType);

    filteredPoints.forEach((point) => {
      const markerEl = getMarkerElement(point.type);

      new mapboxgl.Marker(markerEl)
        .setLngLat(point.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <div style="color: #000; font-size: 14px; line-height: 1.4;">
              <strong>${point.title?.trim() || "Без назви"}</strong><br/>
              ${point.address?.trim() || "Адреса не вказана"}
            </div>
          `)
        )
        .addTo(map.current!);
    });
  }, [points, filterType]);

  const types = Array.from(new Set(points.map((p) => p.type).filter(Boolean)));

  return (
    <Box
      mx="auto"
      px={2}
      display="flex"
      flexDirection="column"
      gap={2}
      paddingTop="20px"
    >
      <FormControl fullWidth>
        <InputLabel id="type-filter-label">Фільтр по типу</InputLabel>
        <Select
          labelId="type-filter-label"
          value={filterType}
          label="Фільтр по типу"
          onChange={(e: SelectChangeEvent) => setFilterType(e.target.value)}
        >
          <MenuItem value="all">Всі</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box
        ref={mapContainer}
        sx={{
          width: "100%",
          height: "500px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />
    </Box>
  );
};
