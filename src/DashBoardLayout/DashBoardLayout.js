import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import useAdmin from "../Components/Hooks/UseAdmin";
import { AuthContext } from "../Components/Pages/Context/AuthProvider";
import NavBar from "../Components/Pages/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { IoSchool } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { useQuery } from "react-query";
import Loading from "../Components/Shared/Loading/Loading";
import useTitle from "../Components/Hooks/useTitle";

const DashBoardLayout = () => {
  useTitle("Dash Board");
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const url =
    "https://cottage-home-care-services-server-site.vercel.app/notifications";

  const { data: allData = [], isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const { officeMessages, messages, users, brooklynMessages } = allData;

  const totalMessage = messages?.length;
  const totalUsers = users?.length;
  const totalBrooklinMessages = brooklynMessages?.length;

  let pca = 0;
  let cdpap = 0;
  let longIsland = 0;
  let queens = 0;
  let bronx = 0;
  let albany = 0;

  if (allData.length <= 0) {
    return <Loading></Loading>;
  } else {
    for (const service of messages) {
      if (service?.service === "PCA") {
        pca = pca + 1;
      } else if (service?.service === "CDPAP") {
        cdpap = cdpap + 1;
      }
    }

    for (const office of officeMessages) {
      if (office?.officeName === "LongIsland") {
        longIsland = longIsland + 1;
      } else if (office?.officeName === "Queens Office") {
        queens = queens + 1;
      } else if (office?.officeName === "Bronx Office") {
        bronx = bronx + 1;
      }
      else if (office?.officeName === "Albany Office") {
        albany = albany + 1;
      }
    }

    // }
  }

  console.log("the pca Message are:", pca);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen ">
      {/* <div className="sticky top-0 z-50">
        <NavBar></NavBar>
      </div> */}

      <div className="sticky top-0 z-50">
        <NavBar></NavBar>
        <div className="my-3 block lg:hidden ">
          <label htmlFor="dashboard-drawer" className=" drawer-button text-4xl text-primary"><CgMenuGridR /></label>
        </div>
      </div>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side lg:border-2 w-[70%] lg:w-fit bg-white lg:bg-[#EBF8F9] rounded-md lg:shadow-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content mt-16">
            <li className="text-primary ">
              <Link to="/dashboard">
                {" "}
                <BiMessageRoundedDots className="w-6 h-6 relative mr-2" /> All
                Messages
                <p className="absolute  top-0 left-9 font-semibold text-xs">
                  {totalMessage}
                </p>
              </Link>
            </li>

            {isAdmin && (
              <>
                <li className="text-primary">
                  <Link to="/dashboard/cdpap">
                    {" "}
                    <BiMessageRoundedDots className="w-6 h-6 relative mr-2" />{" "}
                    All CDPAP Messages
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {cdpap}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/pca">
                    <BiMessageRoundedDots className="w-6 h-6 relative mr-2" />{" "}
                    All PCA Messages
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {pca}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/users">
                    <HiUsers className="w-6 h-6  mr-2" />
                    All Users
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {totalUsers}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/longIsland">
                    <FaHome className="w-6 h-6  mr-2" />
                    Long Island Office
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {longIsland}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/Queens">
                    <FaHome className="w-6 h-6  mr-2" />
                    Queens office
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {queens}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/Bronx">
                    <FaHome className="w-6 h-6 mr-2" />
                    Bronx Office
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {bronx}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/Albany">
                    <FaHome className="w-6 h-6 mr-2" />
                    Albany Office
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {albany}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/brooklyn">
                    <IoSchool className="w-6 h-6 mr-2" />
                    Brooklyn Institute
                    <p className="absolute  top-0 left-9 font-semibold text-xs">
                      {totalBrooklinMessages}
                    </p>
                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/blogForm">
                    <ImBlog className="w-6 h-6 mr-2" />
                    Add A Blog

                  </Link>
                </li>
                <li className="text-primary">
                  <Link to="/dashboard/employee">
                    <FaUserTie className="w-6 h-6 mr-2" />
                    Add An Employee

                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoardLayout;
