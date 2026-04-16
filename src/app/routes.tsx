import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./components/Dashboard";
import { Employees } from "./components/Employees";
import { ChatSupport } from "./components/ChatSupport";
import { GuaxiAI } from "./components/GuaxiAI";
import { HelpResources } from "./components/HelpResources";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "employees", Component: Employees },
      { path: "chat", Component: ChatSupport },
      { path: "guaxi-ai", Component: GuaxiAI },
      { path: "help", Component: HelpResources },
    ],
  },
]);
