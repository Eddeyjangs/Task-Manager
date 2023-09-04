import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Task from "./Pages/Task";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/dashboard/Task" element={<Task />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
