import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Frame from "./components/Frame/Index";
import { adminRoutes } from "./routes";
import { isLogined } from "./utils/auth";
function App() {
  return isLogined() ? (
    <Frame>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps}></route.component>;
              }}
            />
          );
        })}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </Frame>
  ) : (
    <Redirect to="/login" />
  );
}

export default App;
