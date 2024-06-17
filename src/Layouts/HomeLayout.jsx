import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import { logout } from "../Redux/Slices/AuthSlice";

function HomeLayout({ children }) {

    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // for checking the user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    // for displaying the options according to role.
    const role = useSelector((state) => state?.auth?.role);


    // Width Change Method
    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    // Hide Drawer Method
    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        //changeWidth();
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    // handle Logout function
    async function handleLogout(e) {
        e.preventDefault();

        const res = await dispatch(logout());
        if(res?.payload?.success){}

        navigate("/")
    }

    return (
        <>
            <div className="min-h-[90vh]">
                <div className="drawer absolute left-0 z-50 w-fit">
                    <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="cursor-pointer relative ">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-white m-4"
                        />
                        </label>
                    </div>

                    <div className="drawer-side w-0">
                        <label htmlFor="my-drawer" className="drawer-overlay">
                        </label>

                            <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                                <li className="w-fit absolute right-2 z-50">
                                    <button onClick={hideDrawer} className="text-4xl">
                                        <AiFillCloseCircle size={25} />
                                    </button>
                                </li>

                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                {/* check user login or not */}
                                {isLoggedIn && role == "ADMIN" && (
                                    <li>
                                        <Link to="/admin/dashbord"> Admin DashBoard </Link>
                                    </li>
                                )}

                                {isLoggedIn && role == "ADMIN" && (
                                    <li>
                                        <Link to="/course/create"> Craete New Course </Link>
                                    </li>
                                )}

                                <li>
                                    <Link to="/courses">All Courses</Link>
                                </li>

                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>

                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>

                                {/* show the button basis of user loggedIn or not */}
                                {!isLoggedIn && (
                                    <li className="absolute bottom-4 w-[90%]">
                                        <div className="w-full flex items-center justify-center">
                                            <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                                <Link to="/login">Login</Link>
                                            </button>

                                            <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                                <Link to="/signup">Singup</Link>
                                            </button>
                                        </div>
                                    </li>
                                )}

                                {/* if user logged in */}
                                {isLoggedIn && (
                                    <li className="absolute bottom-4 w-[90%]">
                                        <div className="w-full flex items-center justify-center">
                                            <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                                <Link to="user/profile">Profile</Link>
                                            </button>

                                            <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                                <Link onClick={handleLogout}>Logout</Link>
                                            </button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                    </div>
                </div>

                { children }
                <Footer />
            </div>
        </>
    );
}

export default HomeLayout;