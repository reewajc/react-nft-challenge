
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import {useState, useEffect} from 'react';
import PunkList from './components/PunkList';
import Main from './components/Main';

  
function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
   const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x2e8E7A6Ca69Dcc10d2D16fd755fAC52B11F8DFc6&order_direction=asc'
      );
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts();
  }, [])

  return (
    <div className='app'>
    <Header/>
    {punkListData.length > 0 && (
    <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
      <PunkList 
        punkListData={punkListData}
        setSelectedPunk={setSelectedPunk}/>
    </>
    )}
</div>
  );
}

export default App;
