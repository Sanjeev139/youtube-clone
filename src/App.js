
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "/",
        element: <MainContainer></MainContainer>
      },
      {
        path: "/watch",
        element: <WatchPage></WatchPage>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header></Header>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
    </Provider>
    
  );
}

export default App;
