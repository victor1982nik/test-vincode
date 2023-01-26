//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Variables from '../pages/Variables';
import VariableDetails from '../pages/VariableDetails';
//import Form from './Form/Form';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="variables" element={<Variables />} />   
          <Route path="variables/:id" element={<VariableDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
