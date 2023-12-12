import React from "react";
// import { useNavigate } from "react-router";

const AdminSidebar = ({ setActiveComponent }) => {
  // const Navigate=useNavigate();
  return (
    <>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <hr class="sidebar-divider my-0" />
        <li class="nav-item active">
          <a class="nav-link" href="/AdminDashboard">
            <i class="fas fa-clover"><h3>Dashboard</h3></i>
          </a>
        </li>
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Interface</div>
        <li class="nav-item">
          <a class="nav-link collapsed" onClick={() => setActiveComponent('professionalDirectory')} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fas fa-child"></i>
            <span>Add consultants</span>
          </a>
        </li>
        <hr class="sidebar-divider" />
        <li class="nav-item">
          <a class="nav-link collapsed" onClick={() => setActiveComponent('resourceLibrary')} data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Manage Resource Library</span>
          </a>
        </li>
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Addons</div>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="tables.html">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        <hr class="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
};

export default AdminSidebar;
