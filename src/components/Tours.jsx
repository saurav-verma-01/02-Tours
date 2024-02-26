import Tour from "./Tour";

const Tours = ({ toursData, onRemove }) => {
  return (
    <div className="tours">
      {toursData.map((tour) => (
        <Tour key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Tours;
