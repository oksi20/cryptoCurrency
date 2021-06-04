import { useState } from 'react';
import { useSelector } from 'react-redux';
import Converter from './Converter';
import FormConverter from './FormConverter';

const ConverterList = () => {
  let arrCrypto = useSelector((state) => state.crypto.cryptoArray);
  const [selectedCrypto, setSelectedCrypto] = useState({});

  const clickedCard = (name) => {
    const chosenCard = arrCrypto.find((el) => el.name === name);
    setSelectedCrypto(chosenCard);
  };
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 m-auto">
          <FormConverter
            symbol={selectedCrypto.symbol}
            rate={selectedCrypto.current_price}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-wrap">
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
  );
};
export default ConverterList;
