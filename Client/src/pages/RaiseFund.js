import Card from "../components/Card/Card";

const RaiseFund = () => {
  return (
    <div>
      <div className="Raise-Fund-Position">
        <h1 className="Raise-Fund-Font">My Raise Fund</h1>{" "}
      </div>
      <div>
        <button className="makeFundBtn">Make Raise Fund</button>
      </div>
      <Card />
    </div>
  );
};

export default RaiseFund;
