import "./theme/index.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store as reduxStore } from "./reduxStore";

function App() {
  return (
    <Provider store={reduxStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;
