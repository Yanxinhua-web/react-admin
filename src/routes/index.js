import Index from "../pages/admin/dashboard/Index";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: PageNotFound,
  },
];
export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: Index,
  },
  {
    path: "/admin/products",
    component: List,
    exact: true,
  },
  {
    path: "/admin/products/edit/:id",
    component: Edit,
  },
];