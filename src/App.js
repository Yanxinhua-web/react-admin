import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Frame from "./components/Frame/Index";
import { adminRoutes } from "./routes";
function App() {
  return (
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
        <Redirect to="/404" />
      </Switch>
    </Frame>
  );
}

export default App;
