import './App.css'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import Egipt from "./assets/img2.jpg";
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecutingFunction from './components/ExecutingFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = "Moreira";

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 234},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 12412}
  ];

  function showMessage() {
    console.log("Função foi passada!");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>

        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUserName name={name} />
        {/* Destructuring props */}
        <CarDetails brand="VM" km={241354} color="black" newCar={false}/>
        {/* Reaproveitamento */}
        <CarDetails brand="Ford" km={54} color="white" newCar={false}/>
        <CarDetails brand="Fiat" km={0} color="red" newCar={true}/>
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand}  
          color={car.color}
          km={car.km}
          newCar={car.newCar}
          />
        ))}

        {/* Fragments */}
        <Fragments/>

        {/* Children */}
          <Container>
            <p>Isto é uma children</p>
          </Container>

        {/* Executar função */}
        <ExecutingFunction myFunction={showMessage}/>

        {/* State lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

    

      <div>

        {/*<img src="img1.jpg" alt="Galaxia" />*/}
        {/*<img src={Egipt} alt="Egito" /> */}
        
      </div>

    </div>
  )
}

export default App
 