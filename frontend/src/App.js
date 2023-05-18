import {Routes,Route} from "react-router-dom";

import ErrorPage from "./pages/404";
import MainPage from "./pages/main";
import Layout from "./components/layout";
import Cashback from "./pages/cashback";

import {useState,createContext} from "react";

import "./index.scss";
export const StoreContext = createContext();

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
            cashbacks:[]
        }
    )

      return (
          <StoreContext.Provider value={data}>
              <Routes>
                  <Route path="*" element={<ErrorPage/>}/>
                  <Route path="/" element={<Layout/>}>
                      <Route path="/" element={<MainPage/>}/>
                      <Route path="/cashbacks" element={<Cashback/>}/>
                  </Route>
              </Routes>
          </StoreContext.Provider>
      );
}

export default App;
