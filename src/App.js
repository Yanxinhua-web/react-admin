import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { adminRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <h1>我是app组件</h1>
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
      </Switch>
    </div>
  );
}

export default App;
