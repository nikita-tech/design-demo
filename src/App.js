import './App.scss';
import Header from "./components/header/HeaderComponent";
import CarDetail from "./components/CarDetailComponent";
import PlaceYourBid from "./components/PlaceYourBidComponent";

function App() {
  return (
    <div className="container">
      <Header/>
      <h2 className="heading">Old Car Available
        <hr />
      </h2>
      <div className="card-container">
        <div className="card">
          <CarDetail />
        </div>
        <div className="card">
          <PlaceYourBid />
        </div>
      </div>
    </div>
  );
}

export default App;
