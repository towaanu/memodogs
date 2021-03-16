import "./theme/index.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store as reduxStore } from "./reduxStore";
import SWUpdateModal from "./features/offline/SWUpdateModal";

function App() {
  return (
    <Provider store={reduxStore}>
      <SWUpdateModal />
      <AppRouter />
    </Provider>
  );
}

export default App;
