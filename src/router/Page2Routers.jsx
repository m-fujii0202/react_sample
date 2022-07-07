import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routers = [
  {
    path: "/",
    chiidlen: <Page2 />
  },
  {
    path: "/:id",
    chiidlen: <UrlParameter />
  }
];
