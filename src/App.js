import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Database from "./pages/Dashboard/Database";
import Messages from "./pages/Dashboard/Messages";
import PushNotification from "./pages/Dashboard/PushNotification";
import SalesReport from "./pages/Dashboard/SalesReport";
import SignOut from "./pages/Dashboard/SignOut";
import UserMessage from "./pages/Dashboard/UserMessage";
import Home from "./pages/Home/Home";

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route path="/admin/dashboard/main" element={<DashboardHome />} />
            <Route path="/admin/dashboard/database" element={<Database />} />
            <Route path="/admin/dashboard/sales-report" element={<SalesReport />} />
            <Route path="/admin/dashboard/messages" element={<Messages />} />
            <Route path="/admin/dashboard/usermessage/:id" element={<UserMessage />} />
            <Route path="/admin/dashboard/push-notification" element={<PushNotification />} />
            <Route path="/admin/dashboard/signout" element={<SignOut />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
