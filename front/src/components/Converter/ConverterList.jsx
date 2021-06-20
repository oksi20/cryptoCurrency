import { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Converter from './Converter';
import FormConverter from './FormConverter';
import list from "./list.module.css"

const ConverterList = () => {
  let arrCrypto = useSelector((state) => state.coinspartial.cryptoArray);
  const coinsLoading=useSelector(state=>state.coinspartial.loading)
  const [selectedCrypto, setSelectedCrypto] = useState({});

  const clickedCard = (name) => {
    const chosenCard = arrCrypto.find((el) => el.name === name);
    setSelectedCrypto(chosenCard);
  };
  return (
    <>
    {coinsLoading? <Loader /> :
    <div className={`container mt-5 ${list.list}`}>
      <div className="row mt-5">
        <div className="col-6 m-auto">
          <FormConverter
            symbol={selectedCrypto.symbol}
            rate={selectedCrypto.current_price}
            id={selectedCrypto.id}
          />
          <p style={{color:"white"}} >Enter amount of money and choose one of cryptos</p>
        </div>
        
      </div>
      <div className="row">
        <div className="col-12">
          <div className={`d-flex flex-wrap ${list.box}`}>
            {arrCrypto.map((el) => (
              <Converter
                key={el.id}
                icon={el.image}
                title={el.name}
                rate={el.current_price}
                selected={el.name === selectedCrypto.name}
                clickedCard={clickedCard}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
}
  </>
  
  );
};
export default ConverterList;
