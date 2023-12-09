import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
// import Header from './components/Header';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import CategoryVideos from './components/CategoryVideos';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/categoryVideos",
        element: <CategoryVideos />
      }

    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={appStore}>
        {/* <Header /> */}
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
