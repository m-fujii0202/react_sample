import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page1/detailA",
    element: <Page1DetailA />,
  },
  {
    path: "/page1/detailB",
    element: <Page1DetailB />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page2/:id",
    chiidlen: <UrlParameter />,
  },
];
