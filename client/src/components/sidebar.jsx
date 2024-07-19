import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const sidbarMenu = [
    {
      label: "Dashboard",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      linkMenu: "/",
    },
    {
      label: "Log Out",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      linkMenu: "/login",
    },
  ];
  return (
    <Card className="h-full fixed w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="text-center">
          SIMRS SAYA
        </Typography>
      </div>
      <List>
        {sidbarMenu.map(({ label, icon, linkMenu }, i) => (
          <NavLink
            className={({ isActive }) => [
              isActive
                ? "bg-slate-900 text-white"
                : "hover:bg-slate-300 transition",
            ]}
            key={i}
            to={linkMenu}
          >
            <ListItem>
              <ListItemPrefix>{icon}</ListItemPrefix>
              {label}
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Card>
  );
}

export default Sidebar;
