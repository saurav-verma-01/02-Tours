import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import "./app.css";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toursData, setToursData] = useState([]);

  useEffect(() => {
    fetchToursData();
  }, []);

  const fetchToursData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setToursData(data);
    } catch (error) {
      alert("There is some Error in fetching Tours Data");
    } finally {
      setIsLoading(false);
    }
  };

  const refetchAll = () => {
    fetchToursData();
  };

  const handleRemoveTour = (id) => {
    // console.log(id);
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  return (
    <main className="app">
      <h2 className="heading">Our Tours</h2>
      {isLoading ? (
        <Loading />
      ) : toursData.length === 0 ? (
        <button className="btn" onClick={refetchAll}>
          Refetch
        </button>
      ) : (
        <Tours toursData={toursData} onRemove={handleRemoveTour} />
      )}
    </main>
  );
};
export default App;
