import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MapIcon from "@mui/icons-material/Map";
import CallIcon from "@mui/icons-material/Call";

export interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
}

export const categories: Category[] = [
  { id: "contacts", title: "Контакти", icon: CallIcon },
  { id: "transport", title: "Транспорт", icon: DirectionsBusIcon },
  { id: "power", title: "Світло", icon: FlashOnIcon },
  { id: "pharmacy", title: "Аптеки", icon: LocalPharmacyIcon },
  { id: "map", title: "Мапа точок", icon: MapIcon },
  { id: "emergency", title: "Медицина", icon: LocalHospitalIcon },
];
