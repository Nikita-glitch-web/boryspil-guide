import type { CategoryData } from "./types";

export const categoryData: CategoryData = {
  contacts: [
    {
      title: "Швидка допомога",
      phone: "103",
      address: "вул. Лікарська 1",
    },
    {
      title: "Поліція",
      phone: "102",
      address: "вул. Миру 2",
    },
  ],
  pharmacy: [
    {
      title: "Аптека",
      subtitle: "вул. Київський Шлях 14",
      phone: "+380631234567",
      mapUrl: "https://maps.google.com/?q=50.3576187,30.9370077",
    },
  ],
  transport: [
    {
      title: "Маршрут 2",
      mapUrl: "https://maps.google.com/?q=50.3456,30.8954",
      stops: [
        { name: "Аеропорт", time: "06:00" },
        { name: "Центр", time: "06:15" },
        { name: "ЖД вокзал", time: "06:30" },
      ],
    },
    {
      title: "Маршрут 5",
      mapUrl: "https://maps.google.com/?q=50.3499,30.8941",
      stops: [
        { name: "Ринок", time: "06:00" },
        { name: "Лікарня", time: "06:10" },
        { name: "Центр", time: "06:25" },
      ],
    },
  ],
  hospitals: [
    {
      title: "Центральна лікарня",
      subtitle: "вул. Шевченка, 12",
      phone: "+380442223344",
      mapUrl: "https://maps.google.com/?q=50.3501,30.8922",
    },
  ],
  emergency: [
    {
      title: "Пожежна частина",
      phone: "101",
      address: "вул. Грушевського 5",
    },
  ],
};
