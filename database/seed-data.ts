interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Descripción de la entrada 1 Pendiente",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "Descripción de la entrada 2 En progreso",
      status: "in-progress",
      createdAt: Date.now() - 10000,
    },
    {
      description: "Descripción de la entrada 3 Terminada",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};
