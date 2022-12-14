import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Campaign from "./pages/Dashboard/Campaign";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Database from "./pages/Dashboard/Database";
import Messages from "./pages/Dashboard/Messages";
import PushNotification from "./pages/Dashboard/PushNotification";
import SalesReport from "./pages/Dashboard/SalesReport";
import SignOut from "./pages/Dashboard/SignOut";
import UserMessage from "./pages/Dashboard/UserMessage";
import Home from "./pages/Home/Home";
import InputInfo from "./pages/InputInfo/InputInfo";
import ThankYouPage from "./pages/InputInfo/ThankYouPage";

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route path="/admin/dashboard/main" element={<DashboardHome />} />
            <Route path="/admin/dashboard/database" element={<Database />} />
            <Route path="/admin/dashboard/campaign" element={<Campaign />} />
            <Route path="/admin/dashboard/sales-report" element={<SalesReport />} />
            <Route path="/admin/dashboard/messages" element={<Messages />} />
            <Route path="/admin/dashboard/usermessage/:id" element={<UserMessage />} />
            <Route path="/admin/dashboard/push-notification" element={<PushNotification />} />
            <Route path="/admin/dashboard/signout" element={<SignOut />} />
          </Route>
          <Route path="/store/:id/input" element={<InputInfo />} />
          <Route path="/thankyou/:id" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
