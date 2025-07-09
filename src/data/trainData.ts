import type { ElectricTrainRoute } from "./types";

export const Trains: ElectricTrainRoute[] = [
  {
    id: "train-1",
    title: "Електричка 1: Центр → Північ",
    direction: "forward",
    stops: [
      {
        name: "Центр",
        arrival: "06:00",
        departure: "06:05",
        platform: "1A",
      },
      {
        name: "Завод",
        arrival: "06:20",
        departure: "06:22",
        platform: "1B",
      },
      {
        name: "Північ",
        arrival: "06:45",
        departure: "—",
        platform: "2",
      },
    ],
  },
  {
    id: "train-1-back",
    title: "Електричка 1: Північ → Центр",
    direction: "backward",
    stops: [
      {
        name: "Північ",
        arrival: "17:00",
        departure: "17:05",
        platform: "2",
      },
      {
        name: "Завод",
        arrival: "17:30",
        departure: "17:32",
        platform: "1B",
      },
      {
        name: "Центр",
        arrival: "17:50",
        departure: "—",
        platform: "1A",
      },
    ],
  },
];
