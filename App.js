
import './App.css';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Head from './Components/Head';
import Body from './Components/Body';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ]
  }

])

function App() {
  return (
    <Provider store={store}>
    <div>
    <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
