import Home from "../../pages/client/Home";
import Docs from "../../pages/client/Doctors";
import InforDoc from "../../pages/client/DoctorInformation";
import Specialists from "../../pages/client/Specialists";
import Specialist from "../../pages/client/Specialist";

export const DataRouters = [
  {
    id: 1,
    path: "/",
    Element: <Home />,
  },
  {
    id: 2,
    path: "/doctors",
    Element: <Docs />,
  },
  {
    id: 3,
    path: "/more",
    Element: <InforDoc />,
  },
  {
    id: 4,
    path: "/specialists",
    Element: <Specialists />,
  },
  {
    id: 5,
    path: "/specialist",
    Element: <Specialist />,
  },
];
