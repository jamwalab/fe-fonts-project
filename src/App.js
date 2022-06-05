import Widget from "./components/Widget";
import { StoreProvider } from "./hooks/GlobalState";

function App() {
  return (
    
    <div>
      <StoreProvider>
        <Widget/>
      </StoreProvider>  
    </div>
  );
}

export default App;
