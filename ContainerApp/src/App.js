import React,{lazy} from "react";
import { Suspense } from "react";
import { Provider } from "react-redux";
const NumberCounter = lazy(() => import('./components/NumberCounter'));
const DateCounter = lazy(() => import('./components/DateCounter'));
const Redux = lazy(() => import('./components/ReduxStore'));
console.log(DateCounter);

function App() {
  return (
   <Suspense fallback={<p>loading..</p>}>
     <Provider store={{v:3}}>
     <DateCounter/>
     <NumberCounter/>
     </Provider>
    </Suspense>
  );
}

export default App;