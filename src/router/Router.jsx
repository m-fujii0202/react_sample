import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routers } from "./Page1Routers";
import { page2Routers } from "./Page2Routers";

export const Router = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />} 
        /> 

      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Routes>
            {page1Routers.map((route) => (
              <Route
                key={route.path}
                path={`${url}${route.path}`}
                element={`${route.children}`}
                />
            ))}
          </Routes>
        )}
      />

      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Routes>
            {page2Routers.map((route) => (
              <Route
                key={route.path}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Routes>
        )}
      />
    </Routes>
  );
};
