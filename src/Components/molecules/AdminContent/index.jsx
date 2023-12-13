import React from "react";
import supabase from "../../../supa/supabase/supabaseClient";
import { useState, useEffect } from "react";

const AdminContent = () => {
    const [totalUsers, setTotalUsers] = useState(null);
    const [totalConsultants, setTotalConsultants] = useState(null);
    const [totalApp,setTotalApp]=useState(null);
    const getConsultantRowCount = async () => {
        try {
            // Use the 'count' method to get the number of rows
            const { data:condata, error:conerror } = await supabase
                .from('tblConsultant')
                .select('count', { count: 'exact' });

            if (conerror) {
                alert(conerror.message)
            }
            const rowCount = condata[0].count;
            return rowCount;
        } catch (error) {
            console.error('Error fetching row count:', error.message);

        }
    };
    const getVisitorRowCount = async () => {
        try {
            // Use the 'count' method to get the number of rows
            const { data, error } = await supabase
                .from('tblVisitor')
                .select('count', { count: 'exact' });

            if (error) {
                throw error;
            }
            const rowCount = data[0].count;
            return rowCount;
        } catch (error) {
            console.error('Error fetching row count:', error.message);
            throw error;
        }
    };
    const getAppointmentCount = async () => {
        try {
            // Use the 'count' method to get the number of rows
            const { data:aptdata, error:apterror } = await supabase
                .from('tblBooking')
                .select('count', { count: 'exact' });

            if (apterror) {
                console.log(apterror.message)
            }
            const rowCount = aptdata[0].count;
            return rowCount;
        } catch (error) {
            console.error('Error fetching row count:', error.message);
            throw error;
        }
    };
    useEffect(() => {
        const fetchTotalVisitors = async () => {
            try {
                // Replace with your actual users table name
                const rowCount = await getVisitorRowCount();
                setTotalUsers(rowCount);
            } catch (error) {
                console.error('Error fetching total users:', error.message);
            }
        };

        fetchTotalVisitors();
    }, []);
    useEffect(()=>{
        const fetchTotalConsultants = async () => {
            try {
                const conRowCount = await getConsultantRowCount();
                setTotalConsultants(conRowCount);
            }
            catch (error) {
                console.error('Error fetching total consultants', error.message);
            }
        }
        fetchTotalConsultants();
    },[]);
    useEffect(()=>{
        const fetchTotalApt = async () => {
            try {
                const aptRowCount = await getAppointmentCount();
                setTotalApp(aptRowCount);
            }
            catch (error) {
                console.error('Error fetching total consultants', error.message);
            }
        }
        fetchTotalApt();
    },[]);
    return (
        <>
            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h1 mb-0 text-gray-800">Dashboard</h1>
                    <a href="/" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i class="fas fa-arrow-alt-circle-left fa-sm text-white-50"></i> Visit visitor UI
                    </a>
                </div>

                {/* <!-- Content Row --> */}
                <div class="row">
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-s font-weight-bold text-primary text-uppercase mb-1">
                                            Visitors count
                                        </div>
                                        <div class="h3 mb-0 font-weight-bold text-gray-800">
                                            {/* <!-- fetch row count --> */}
                                            {totalUsers !== null ? totalUsers : 'Loading...'}
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-s font-weight-bold text-success text-uppercase mr-0">
                                            Consultants count
                                        </div>
                                        <div class="h3 mb-0 font-weight-bold text-gray-800">
                                            {totalConsultants !== null ? totalConsultants : 'Loading...'}
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-s font-weight-bold text-info text-uppercase mb-1">
                                            Appointments booked via the system
                                        </div>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <div class="h3 mb-0 mr-3 font-weight-bold text-gray-800">
                                                {totalApp !== null ? totalApp : 'Loading...'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminContent;
