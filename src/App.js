import './App.css';
import Home from './screens/Home/Home';
import {
  BrowserRouter,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import Login from './screens/Login/Login';
import List from './screens/List/List';
import Single from './screens/Single/Single';
import New from './screens/New/New';
import { userInputs } from './formSource';
import { productInputs } from './formSource';
import './style/dark.css'
import { useContext } from 'react';
import { DarkMode } from '@mui/icons-material';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
    {/* <div className='app dark'> */}

      {/* <Home /> */}
      <BrowserRouter>
        <Routes>  
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title='Add New User' />} />
            </Route>

            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title='Add New Product' />} /> 
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
