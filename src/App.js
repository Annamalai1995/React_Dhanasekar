import FirebaseCrud from "./crud";
import { Add, OrderList } from "./function";
import { Parameter } from "./ParameterComponent";
import { Tables } from "./Tablecss";
import { Ternary } from "./Ternary";
import { Effect } from "./useeffect";
import { UsestateHooks } from "./usestate";
import { Count } from "./usestatecount";


function App() {
  return (
    <>
    <FirebaseCrud/>
    {/* <Effect/>
    <Ternary/> */}
    {/* <UsestateHooks/>
    <Count/> */}
    {/* <OrderList/>
    <Add/>
     */}
     {/* <Tables/>
      */}
           {/* <Parameter where="./Panda.jpg"length="400px"breadth="400px"/> */}


    </>
  );
}

export default App;
