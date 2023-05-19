import {Routes,Route,Navigate} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import ErrorPage from "./pages/404";
import MainPage from "./pages/main";
import Layout from "./components/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import RouteGuard from "./components/routeGuard";

import axios from "axios";
import {useState,createContext,useEffect} from "react";

import "./index.scss";
export const StoreContext = createContext();

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}
function App() {
    const [data, setData] = useState(
        {
            categories: [
                {
                    type: "Житло",
                    value: 700,
                    color:"#C04000",
                    category: "house"

                },
                {
                    type: "Транспорт",
                    value: 100,
                    color:"#FFFF00",
                    category: "transport"
                },
                {
                    type: "Їжа",
                    value: 1000,
                    color:"#568203",
                    category: "food"
                },
                {
                    type: "Інше",
                    value: 1000,
                    color:"#808080",
                    category: "other"

                },
                {
                    type: "Податки",
                    value: 1000,
                    color:"#002366",
                    category: "taxes"

                },
                {
                    type: "Здоровʼя",
                    value: 500,
                    color:"#FF0000",
                    category: "health"

                },
                {
                    type: "Навчання",
                    value: 100,
                    color:"#6082B6",
                    category: "study"

                },
                {
                    type: "Розваги",
                    value: 10000,
                    color:"#E30B5C",
                    category: "relax"

                },
                {
                    type: "Інвестиції",
                    value: 100,
                    color:"#666699",
                    category: "invest"

                },
            ],
            notifications:[
                {
                    descr: "test",
                    value: 100,
                    date: new Date().toLocaleString("uk", {
                        day:"numeric",
                        month:"long",
                        year:"numeric"
                    })
                },
                {
                    descr: "test",
                    value: 100,
                    date: new Date().toLocaleString("uk", {
                        day:"numeric",
                        month:"long",
                        year:"numeric"
                    })
                },
            ],
            income: [
                {
                    value: 500,
                    date: "Січень"
                },
                {
                    value: 500,
                    date: "Лютий"
                },
                {
                    value: 1500,
                    date: "Березень"
                },
                {
                    value: 500,
                    date: "Квітень"
                },
                {
                    value: 4750,
                    date: "Травень"
                },
                {
                    value: 12500,
                    date: "Червень"
                },
                {
                    value: 5400,
                    date: "Липень"
                },
                {
                    value: 506,
                    date: "Серпень"
                },
                {
                    value: 100,
                    date: "Вересень"
                },
                {
                    value: 400,
                    date: "Жовтень"
                },
                {
                    value: 500,
                    date: "Листопад"
                },
                {
                    value: 400,
                    date: "Грудень"
                },
            ],
            deposits: [],
            credits: []
        }
    )
    const token = localStorage.getItem("token");

    if (token) {
        setAuthToken(token);
    }
      return (
          <StoreContext.Provider value={data}>
              <ChakraProvider>
                  <Routes>
                      <Route path="*" element={<ErrorPage/>}/>
                      <Route path="/" element={<Layout/>}>
                          <Route path="/" element={<RouteGuard component={<MainPage/>}/>}/>
                      </Route>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/register" element={<Register/>}/>
                  </Routes>
              </ChakraProvider>
          </StoreContext.Provider>
      );
}

export default App;
