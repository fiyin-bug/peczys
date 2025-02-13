
import Navbar from './Navbar';
import OilCard from './OilCard';
import oil1 from './assets/oil1.jpg';
import oil2 from './assets/oil2.jpg';
import oil3 from './assets/oil3.jpg';

const perfumesData = [
  { id: 1, name: "Oil1",  image:oil1 , price:20000},
  { id: 2, name: "Oil2",  image:oil2, price: 25000},
  { id: 3, name: "Oil3",  image:oil3, price: 30000},
  
];
const PerfumeOil = () => {
    return (
      <>
        <Navbar/>
        <h4 className="sho">SHOP OUR COLLECTION</h4>
        <div className="perfumes-container">
          {perfumesData.map(perfume => (
            <OilCard
              key={perfume.id} 
              id={perfume.id} 
              name={perfume.name} 
            //   gender={perfume.gender} 
              image={perfume.image} 
              price ={perfume.price}
              
            />
          ))}
        </div>
      </>
    );
  };
  
  export default PerfumeOil;