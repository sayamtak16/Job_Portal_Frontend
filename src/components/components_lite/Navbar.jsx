import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, Menu, User2, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data?.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <nav className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#6B3AC2]">Job</span>{" "}
            <span className="text-[#FA4F09]">Sphere</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-16 left-0 w-full bg-black flex-col items-center py-6 gap-6 md:static md:flex md:flex-row md:items-center md:w-auto md:bg-transparent md:py-0`}
        >
          <ul className="flex flex-col md:flex-row gap-6 font-medium text-white items-center">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies" onClick={() => setMenuOpen(false)}>Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Home" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/Browse" onClick={() => setMenuOpen(false)}>Browse</Link>
                </li>
                <li>
                  <Link to="/Jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
                </li>
                <li>
                  <Link to="/Creator" onClick={() => setMenuOpen(false)}>About</Link>
                </li>
              </>
            )}
          </ul>

          {/* Auth Buttons */}
          {!user ? (
            <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black w-32">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <Button className="bg-red-600 hover:bg-red-700 w-32">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="Profile"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="Profile"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6 text-gray-600">
                  {user.role === "Student" && (
                    <div className="flex items-center gap-2">
                      <User2 />
                      <Link to="/Profile" className="text-blue-600 hover:underline">
                        Profile
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <LogOut />
                    <button
                      onClick={logoutHandler}
                      className="text-blue-600 hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
