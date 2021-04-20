import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Item />
      </ErrorBoundary>
    </div>
  );
}

export default App;
