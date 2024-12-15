import RoutesApp from "./Routes.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RoutesApp />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
      />
    </>
  );
}

export default App;
