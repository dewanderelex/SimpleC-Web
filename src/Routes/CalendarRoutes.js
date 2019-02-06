import Day from '../Views/Day/Day';
import Month from '../Views/Month/Month'
import Week from '../Views/Week/Week';
import Year from '../Views/Year/Year';

const CalendarRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Week",
    navbarName: "Weekly Calendar",
    // icon: Dashboard,
    component: Week
  },
  {
    path: "/week",
    sidebarName: "Week",
    navbarName: "Weekly Calendar",
    // icon: Dashboard,
    component: Week
  },
  {
    path: "/day",
    sidebarName: "Day",
    navbarName: "Daily Calendar",
    // icon: Dashboard,
    component: Day
  },
  {
    path: "/month",
    sidebarName: "Month",
    navbarName: "Monthly Calendar",
    // icon: Person,
    component: Month
  },
  {
    path: "/year",
    sidebarName: "Year",
    navbarName: "Annual Calendar",
    // icon: Person,
    component: Year
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default CalendarRoutes;
