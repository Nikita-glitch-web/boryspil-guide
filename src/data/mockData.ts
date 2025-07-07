export const categoryData: Record<
  string,
  Array<{
    title: string;
    subtitle?: string;
    phone?: string;
    address?: string;
    mapUrl?: string;
    schedule?: string[];
  }>
> = {
  contacts: [
    { title: "Швидка допомога", phone: "103", address: "вул. Лікарська 1" },
    { title: "Поліція", phone: "102", address: "вул. Миру 2" },
  ],
  pharmacy: [
    {
      title: "Аптека №1",
      subtitle: "вул. Київський Шлях 14",
      phone: "+380631234567",
      mapUrl: "https://maps.google.com/?q=50.3576187,30.9370077",
    },
  ],
  transport: [
    {
      title: "Маршрут №2",
      subtitle: "Аеропорт — Центр — ЖД вокзал",
      schedule: ["06:00", "07:00", "08:00", "09:00"],
      mapUrl: "https://maps.google.com/?q=50.3456,30.8954",
    },
    {
      title: "Маршрут №5",
      subtitle: "Київський Шлях — Лікарня — Ринок",
      schedule: ["06:30", "07:30", "08:30", "09:30"],
      mapUrl: "https://maps.google.com/?q=50.3499,30.8941",
    },
    {
      title: "Повний розклад",
      subtitle: "PDF файл для скачування",
      mapUrl: "https://boryspil.gov.ua/docs/transport_schedule.pdf",
    },
  ],
};
