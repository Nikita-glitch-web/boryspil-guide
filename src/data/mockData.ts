export const categoryData: Record<
  string,
  Array<{ title: string; subtitle?: string; phone?: string }>
> = {
  contacts: [
    { title: "Швидка допомога", phone: "103" },
    { title: "Поліція", phone: "102" },
    { title: "Газова служба", phone: "104" },
    { title: "Таксі Boryspil", phone: "+380678001122" },
  ],
  pharmacy: [
    {
      title: "Аптека №1",
      subtitle: "вул. Київський Шлях 14",
      phone: "+380631234567",
    },
    {
      title: "Цілодобова аптека",
      subtitle: "вул. Головна 5",
      phone: "+380931112233",
    },
  ],
};
