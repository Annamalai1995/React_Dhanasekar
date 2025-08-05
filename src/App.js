import { Add, OrderList } from "./function";
import { Parameter } from "./ParameterComponent";
import { Tables } from "./Tablecss";
import { UsestateHooks } from "./usestate";
import { Count } from "./usestatecount";


function App() {
  return (
    <>
    <UsestateHooks/>
    <Count/>
    {/* <OrderList/>
    <Add/>
     */}
     {/* <Tables/>
      */}
           <Parameter where="./Panda.jpg"length="400px"breadth="400px"/>


    </>
  );
}

export default App;
