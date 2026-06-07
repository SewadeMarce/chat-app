chat-app/
│
├── app/                        # React Router Framework Mode
│   ├── components/
│   │   ├── Chat/
│   │   ├── Layout/
│   │   ├── Sidebar/
│   │   └── UI/
│   │
│   ├── routes/
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── chat.tsx
│   │   ├── profile.tsx
│   │   └── api/
│   │
│   ├── services/
│   │   ├── auth.client.ts
│   │   ├── socket.client.ts
│   │   └── message.client.ts
│   │
│   ├── root.tsx
│   └── routes.ts
│
├── server/
│   ├── config/
│   │   ├── database.ts
│   │   └── socket.ts
│   │
│   ├── models/
│   │   ├── User.ts
│   │   ├── Message.ts
│   │   └── Conversation.ts
│   │
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   ├── messageController.ts
│   │   └── conversationController.ts
│   │
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── validate.ts
│   │
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   │   ├── messageRoutes.ts
│   │   └── conversationRoutes.ts
│   │
│   └── index.ts
│
├── public/
├── .env
├── package.json
└── react-router.config.ts