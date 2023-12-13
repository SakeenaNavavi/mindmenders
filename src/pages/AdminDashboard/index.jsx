import React from "react";
import AdminContent from "../../Components/molecules/AdminContent";
import AdminNavigation from "../../Components/molecules/AdminNavigation";
import './index.css';
import AdminSidebar from "../../Components/molecules/AdminSidebar";
import { useState } from 'react';
import AdminProfessionalDirectory from "../../Components/molecules/AdminProfessionalDirectory";
import AdminRegistration from "../../Components/molecules/AdminRegistration";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('');

  return (
    <>
      <div id="wrapper">
        <AdminSidebar setActiveComponent={setActiveComponent} />
        <div className="admin-content">
        </div>
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  Main Content  */}
          <div id="content">
            <AdminNavigation />
            {activeComponent === 'professionalDirectory' ? (
              <AdminProfessionalDirectory />
            ) : (
              activeComponent === 'AdminRegistration' ? (
                <AdminRegistration />
              ) : (
                <AdminContent />
              )
            )}
          </div>

        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
}

export default AdminDashboard;
