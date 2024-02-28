import type { Category } from "../types";

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    parentId: null,
  },
  {
    id: 2,
    name: "Gaming",
    parentId: 1,
  },
  {
    id: 3,
    name: "Gamepads",
    parentId: 2,
  },
  {
    id: 4,
    name: "Game console",
    parentId: 2,
  },
  {
    id: 5,
    name: "Smartphones",
    parentId: 1,
  },
  {
    id: 6,
    name: "Iphone",
    parentId: 5,
  },
  {
    id: 7,
    name: "Samsung",
    parentId: 5,
  },
  {
    id: 8,
    name: "Health and Beauty",
    parentId: null,
  },
  {
    id: 9,
    name: "Perfume",
    parentId: 8,
  },
  {
    id: 10,
    name: "Makeup",
    parentId: 8,
  },
  {
    id: 11,
    name: "Lipstick",
    parentId: 10,
  },
  {
    id: 12,
    name: "Foundation",
    parentId: 10,
  },
  {
    id: 13,
    name: "Nail Polish",
    parentId: 10,
  },
  {
    id: 14,
    name: "House and Garden",
    parentId: null,
  },
  {
    id: 15,
    name: "Furniture",
    parentId: 14,
  },
  {
    id: 16,
    name: "Table",
    parentId: 15,
  },
  {
    id: 17,
    name: "Chair",
    parentId: 15,
  },
  {
    id: 18,
    name: "Bedroom",
    parentId: 15,
  },
  {
    id: 19,
    name: "Kitchen",
    parentId: 15,
  },
  {
    id: 20,
    name: "Appliances",
    parentId: 14,
  },
  {
    id: 21,
    name: "Microwave",
    parentId: 20,
  },
  {
    id: 22,
    name: "Refrigerator",
    parentId: 20,
  },
  {
    id: 23,
    name: "Washing machine",
    parentId: 20,
  },
  {
    id: 24,
    name: "Home Decor",
    parentId: 14,
  },
  {
    id: 25,
    name: "Curtains",
    parentId: 24,
  },
  {
    id: 26,
    name: "Cushions",
    parentId: 24,
  },
  {
    id: 27,
    name: "Rugs",
    parentId: 24,
  },
  {
    id: 28,
    name: "Lighting",
    parentId: 24,
  },
];
