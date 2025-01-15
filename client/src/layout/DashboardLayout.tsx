import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router";
import { useState } from "react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-hidden grid grid-rows-[auto_1fr] grid-cols-[250px_1fr]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

      {/* Header */}
      <Header toggleSidebar={toggleSidebar}/>

      {/* Main Content */}
      <main className="p-4 bg-transparent overflow-scroll">
        <Outlet/>
      </main>
    </div>

  );
};

export default DashboardLayout;
