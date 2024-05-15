import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const EventRegistration = lazy(() => import("./pages/EventRegistration.tsx"));
const EventParticipants = lazy(() => import("./pages/EventParticipants.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<EventRegistration />} />
          <Route path="participants" element={<EventParticipants />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
