import '../styles/App.css';
import restaurantlist from "../restaurantlist"
import Restaurant from './Restaurant';
import Header from './Header';

function App() {
  return (<div>
    <Header />
    {restaurantlist.map( (restaurantItem, index) =>{
        return <Restaurant 
          key = {index}
          name = {restaurantItem.name}
          address = {restaurantItem.address}
          rating = {restaurantItem.rating}
          image = {restaurantItem.imgurl}
        />
    })}
  </div>
  );
}

export default App;
