import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import { MainAppLegacy } from './09-useContext/MainAppLegacy';
// import { MainApp } from "./09-useContext/MainApp";
// import { router } from './09-useContext/router'

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <BrowserRouter>
      <MainAppLegacy />    
    </BrowserRouter>
    {/* </RouterProvider> */}
  </React.StrictMode>
);












// import CounterApp from "./01-useState/CounterApp";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import HooksApp from "./HooksApp";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { MemoHook } from "./06-memo/MemoHook";
// import { Memorize } from "./06-memo/Memorize";
// import { CallbackHook } from "./06-memo/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
