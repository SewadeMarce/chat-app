import "react-router";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";


declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
  }
}


const app = express();
const httpServer = createServer(app);

// Initialisation de Socket.io attaché au serveur HTTP
const io = new Server(httpServer, {
  cors: {
    origin: "*", // À restreindre en production pour la sécurité
  },
});
app.use(
  createRequestHandler({
    // @ts-expect-error - Vite gère l'import, mais TS peut bloquer sur le chemin build
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express",
      };
    },
  }),
);

export  {app,httpServer};