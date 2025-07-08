type Stop = {
  name: string;
  time: string;
};

type CategoryItem = {
  title: string;
  subtitle?: string;
  phone?: string;
  address?: string;
  mapUrl?: string;
  schedule?: string[];
  stops?: Stop[];
};

export const categoryData: Record<string, CategoryItem[]> = {
  contacts: [
    { title: "Швидка допомога", phone: "103", address: "вул. Лікарська 1" },
    { title: "Поліція", phone: "102", address: "вул. Миру 2" },
  ],
  pharmacy: [
    {
      title: "Аптека №",
      subtitle: "вул. Київський Шлях 14",
      phone: "+380631234567",
      mapUrl: "https://maps.google.com/?q=50.3576187,30.9370077",
    },
  ],
  transport: [
    {
      title: "Маршрут 2",
      stops: [
        { name: "Аеропорт", time: "06:00" },
        { name: "Центр", time: "06:15" },
        { name: "ЖД вокзал", time: "06:30" },
      ],
      mapUrl: "https://maps.google.com/?q=50.3456,30.8954",
    },
    {
      title: "Маршрут 5",
      stops: [
        { name: "Ринок", time: "06:00" },
        { name: "Лікарня", time: "06:10" },
        { name: "Центр", time: "06:25" },
      ],
      mapUrl: "https://maps.google.com/?q=50.3499,30.8941",
    },
  ],
};
