import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MemoPage from "./pages/MemoPage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/memo">
          <MemoPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
