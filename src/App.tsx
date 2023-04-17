import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "Tokyo", "Ontario", "Berlin"];
  const handleItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/*<ListGroup items={cities} heading="Cities" onSelectItem={handleItem} />*/}
      <Alert>
        hi there{" "}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </Alert>
    </div>
  );
}

export default App;
