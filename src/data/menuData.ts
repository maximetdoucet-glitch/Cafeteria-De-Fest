export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "friet",
    name: "Friet",
    items: [
      { name: "Friet Klein", price: "€3,00" },
      { name: "Friet Middel", price: "€4,00" },
      { name: "Friet Groot", price: "€5,00" },
      { name: "Friet Speciaal", price: "€5,50", description: "Mayo, curry, ui", popular: true },
      { name: "Patatje Oorlog", price: "€5,50", description: "Mayo, satésaus, ui" },
      { name: "Patatje Joppie", price: "€5,00", description: "Met Joppiesaus" },
      { name: "Friet met Stoofvlees", price: "€8,50", description: "Ambachtelijk gestoofd rundvlees", popular: true },
      { name: "Friet Ketchup", price: "€4,50" },
      { name: "Loaded Fries", price: "€9,00", description: "Kaas, bacon, jalapeño, saus" },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      { name: "Frikandel", price: "€2,50" },
      { name: "Kroket", price: "€2,50", popular: true },
      { name: "Kaassouflé", price: "€2,50", vegetarian: true },
      { name: "Bami Schijf", price: "€2,50" },
      { name: "Nasi Schijf", price: "€2,50" },
      { name: "Mexicano", price: "€2,75" },
      { name: "Kipcorn", price: "€2,75" },
      { name: "Loempia", price: "€3,00" },
      { name: "Frikandel Speciaal", price: "€3,50", description: "Mayo, curry, ui" },
      { name: "Gehaktbal", price: "€3,00" },
      { name: "Viandel", price: "€2,75" },
      { name: "Berenhap", price: "€3,50" },
    ],
  },
  {
    id: "kapsalon",
    name: "Kapsalon",
    items: [
      { name: "Kapsalon Shoarma", price: "€10,50", description: "Friet, shoarma, kaas, salade, saus", popular: true },
      { name: "Kapsalon Kip", price: "€10,50", description: "Friet, kip, kaas, salade, saus" },
      { name: "Kapsalon Döner", price: "€11,00", description: "Friet, döner, kaas, salade, saus" },
      { name: "Calzone Kapsalon", price: "€12,50", description: "Speciale De Fest variant!", popular: true },
      { name: "Kapsalon Falafel", price: "€10,50", description: "Friet, falafel, kaas, salade, saus", vegetarian: true },
    ],
  },
  {
    id: "pizza",
    name: "Pizza's",
    items: [
      { name: "Margherita", price: "€8,50", description: "Tomaat, mozzarella, basilicum", vegetarian: true },
      { name: "Hawaii", price: "€10,00", description: "Ham, ananas, kaas" },
      { name: "Pepperoni", price: "€10,50", description: "Pikante pepperoni, mozzarella" },
      { name: "Shoarma Pizza", price: "€11,00", description: "Shoarma, ui, paprika, knoflooksaus", popular: true },
      { name: "Pizza Tonno", price: "€10,50", description: "Tonijn, ui, olijven" },
      { name: "Pizza Quattro Formaggi", price: "€11,00", description: "Vier kazen", vegetarian: true },
      { name: "Calzone", price: "€11,50", description: "Gevulde pizza met ham & kaas" },
      { name: "Pizza De Fest Special", price: "€12,50", description: "Alles erop en eraan!", popular: true },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { name: "Hamburger", price: "€5,50" },
      { name: "Cheeseburger", price: "€6,50" },
      { name: "Kipburger", price: "€6,50" },
      { name: "De Fest Burger", price: "€9,50", description: "Dubbel vlees, bacon, cheddar, saus", popular: true },
      { name: "Broodje Shoarma", price: "€7,00" },
      { name: "Broodje Döner", price: "€7,50" },
      { name: "Broodje Falafel", price: "€6,50", vegetarian: true },
    ],
  },
  {
    id: "schotels",
    name: "Schotels",
    items: [
      { name: "Shoarma Schotel", price: "€12,00", description: "Met friet, salade en saus" },
      { name: "Kip Schotel", price: "€12,00", description: "Met friet, salade en saus" },
      { name: "Döner Schotel", price: "€12,50", description: "Met friet, salade en saus" },
      { name: "Mix Schotel", price: "€13,50", description: "Shoarma, kip, döner", popular: true },
    ],
  },
  {
    id: "dranken",
    name: "Dranken",
    items: [
      { name: "Coca-Cola", price: "€2,00" },
      { name: "Fanta", price: "€2,00" },
      { name: "Sprite", price: "€2,00" },
      { name: "Ice Tea", price: "€2,00" },
      { name: "Water", price: "€1,50" },
      { name: "Chocomel", price: "€2,50" },
      { name: "Milkshake", price: "€4,00", description: "Vanille, aardbei of chocolade" },
      { name: "Ayran", price: "€2,00" },
    ],
  },
];
