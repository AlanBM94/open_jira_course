import mongoose from "mongoose";

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Ya estabamos conectados");
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Usando conexión anterior");
      return;
    }
  }

  try {
    await mongoose.connect(process.env.MONGO_URL || "");
  } catch (error) {
    console.log("error", error);
  }

  mongoConnection.isConnected = 1;

  console.log("Conectado a mongodb:", process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongoConnection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log("Desconectado de MongoDB");
};
