/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

// templates
const MainTemplate = lazy(() => import("./presentation/template/MainTemplate"));

import "./App.css";

const AppContent = () => {
  const appRouteMemo = useMemo(() => AppRoutes, []);
  const renderContent = () => {
    return (
      <Routes>
        {appRouteMemo.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    );
  };

  return (
    <Suspense>
      <MainTemplate>{renderContent()}</MainTemplate>
    </Suspense>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
};

export default App;
