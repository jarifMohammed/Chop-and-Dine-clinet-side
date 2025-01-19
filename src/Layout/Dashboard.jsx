import { NavLink, Outlet } from "react-router-dom";
import { 
    HomeIcon, 
    ClipboardListIcon, 
    ShoppingCartIcon, 
    PencilAltIcon, 
    CalendarIcon, 
    MenuIcon, 
    ShoppingBagIcon, 
    PhoneIcon,
    UserGroupIcon,
    UserAddIcon,
    ArchiveIcon
} from "@heroicons/react/outline";

const Dashboard = () => {
    // Set admin value directly
    const admin = true;

    return (
        <div className="flex min-h-screen">
            {/* Sidebar Drawer */}
            <div className="w-64 bg-orange-400 p-4">
                <h2 className="text-2xl font-bold text-white mb-6">Dashboard</h2>
                <ul className="menu space-y-4">
                    {/* Conditionally render menu items for users */}
                    {!admin && (
                        <>
                            {/* User Home */}
                            <li>
                                <NavLink
                                    to="/dashboard/home"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    User Home
                                </NavLink>
                            </li>
                            {/* Reservation */}
                            <li>
                                <NavLink
                                    to="/dashboard/reservation"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <ClipboardListIcon className="h-5 w-5" />
                                    Reservation
                                </NavLink>
                            </li>
                            {/* My Cart */}
                            <li>
                                <NavLink
                                    to="/dashboard/cart"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    My Cart
                                </NavLink>
                            </li>
                            {/* Add a Review */}
                            <li>
                                <NavLink
                                    to="/dashboard/add-review"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <PencilAltIcon className="h-5 w-5" />
                                    Add a Review
                                </NavLink>
                            </li>
                            {/* My Bookings */}
                            <li>
                                <NavLink
                                    to="/dashboard/my-bookings"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <CalendarIcon className="h-5 w-5" />
                                    My Bookings
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Conditionally render menu items for admins */}
                    {admin && (
                        <>
                            {/* Admin Home */}
                            <li>
                                <NavLink
                                    to="/dashboard/admin-home"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    Admin Home
                                </NavLink>
                            </li>
                            {/* Add Items */}
                            <li>
                                <NavLink
                                    to="/dashboard/add-item"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <MenuIcon className="h-5 w-5" />
                                    Add Items
                                </NavLink>
                            </li>
                            {/* Manage Items */}
                            <li>
                                <NavLink
                                    to="/dashboard/manage-items"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <ShoppingBagIcon className="h-5 w-5" />
                                    Manage Items
                                </NavLink>
                            </li>
                            {/* Manage Bookings */}
                            <li>
                                <NavLink
                                    to="/dashboard/manage-bookings"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <CalendarIcon className="h-5 w-5" />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            {/* All Users */}
                            <li>
                                <NavLink
                                    to="/dashboard/all-users"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                            isActive ? "bg-orange-600 text-white" : "text-white"
                                        }`
                                    }
                                >
                                    <UserGroupIcon className="h-5 w-5" />
                                    All Users
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>

                {/* Divider */}
                <div className="my-6 border-t "></div>

                <ul className="menu space-y-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                    isActive ? "bg-orange-600 text-white" : "text-white"
                                }`
                            }
                        >
                            <HomeIcon className="h-5 w-5" />
                             Home
                        </NavLink>
                    </li>
                    {/* Menu */}
                    <li>
                        <NavLink
                            to="/order/salad"
                            className={({ isActive }) =>
                                `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                    isActive ? "bg-orange-600 text-white" : "text-white"
                                }`
                            }
                        >
                            <MenuIcon className="h-5 w-5" />
                            Menu
                        </NavLink>
                    </li>
                    {/* Shop */}
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                    isActive ? "bg-orange-600 text-white" : "text-white"
                                }`
                            }
                        >
                            <ShoppingBagIcon className="h-5 w-5" />
                            Shop
                        </NavLink>
                    </li>
                    {/* Contact */}
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-2 p-2 rounded hover:bg-orange-500 ${
                                    isActive ? "bg-orange-600 text-white" : "text-white"
                                }`
                            }
                        >
                            <PhoneIcon className="h-5 w-5" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
