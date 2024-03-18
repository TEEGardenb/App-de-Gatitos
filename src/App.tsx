import "./App.css";
import { useCat } from "./hooks/useCat";
import { Button } from "./components/Button";

function App() {
  const { fact, loading, catImg, getFact } = useCat();

  const handleClick = () => {
    getFact();
  };

  return (
    <>
      {loading && (
        <div
          className="container"
          style={{
            minHeight: "95vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Loading...</h2>
        </div>
      )}

      {!loading && (
        <div className="container">
          <h1>App de gatitos</h1>
          <Button text="Cargar" onClick={handleClick} />
          <p>{fact}</p>
          <img src={catImg} alt="cat-img" />
        </div>
      )}
    </>
  );
}

export default App;
