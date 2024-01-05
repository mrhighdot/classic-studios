import { AuditRequest, Footer, Navbar } from ".";
import { Outlet } from "react-router-dom";
const Applayout = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <AuditRequest />
      <Footer />
    </div>
  );
};

export default Applayout;
