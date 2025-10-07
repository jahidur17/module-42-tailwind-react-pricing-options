import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ReasultChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";



const PricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ball loading-lg"></span>}
        >
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
        <Suspense
          fallback={<span className="loading loading-ball loading-lg"></span>}
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
