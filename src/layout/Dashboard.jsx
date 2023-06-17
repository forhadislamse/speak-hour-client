import { NavLink, Outlet } from "react-router-dom";
import { FaCheckDouble, FaCreditCard, FaUserCheck, FaUsers } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";

// import useSelects from "../hooks/useSelects";

const Dashboard = () => {
    // const [select] = useSelects();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-red-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {isAdmin ? <>
                        <p>Name: {user?.displayName}</p>
                        <li>
                            <NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users
                            </NavLink></li>
                        <li><NavLink to="/dashboard/manageclasses"><FaCheckDouble></FaCheckDouble> Manage Classes</NavLink></li></> :
                        <>
                            <p>Name: {user?.displayName}</p>
                            <li>
                                <NavLink to="/dashboard/myselectedclasses"><FaCreditCard></FaCreditCard> My Selected Classes
                                </NavLink></li>
                            <li><NavLink to="/dashboard/myenrolledclasses"><FaUserCheck></FaUserCheck> My Enrolled Classes</NavLink></li>

                        </>}



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;


