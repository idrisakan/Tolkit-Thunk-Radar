import { useEffect, useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  //harita görünümü aktif mi state i
const [ismapView, setIsmapView] =useState(true);

// detay gösterilecek uçusun  id si
const [detailId, setDetailId] = useState(null)

const dispatch = useDispatch()

useEffect(()=> {
  //sayfa açıldığında uçuşları al
dispatch(getFlights());

//ardından her 50 saniyede bir uçuşları al
const intervalId = setInterval(() => {
  dispatch(getFlights());
}, 50000);
// componentWillUnmount (birleşenin ekrandan gitme olayı ) çalışırsa sayacı durdurur
return () => clearInterval(intervalId);
}, []);

  return (
   <div>
      <Header />

      <div className="view-buttons">
        <button
        className={ismapView ? 'active' : ''}
        onClick={() => setIsmapView(true)} >Harita Görünümü</button>
        <button
        className={ismapView ? '' : 'active'}
        onClick={() => setIsmapView(false)}>Liste Görünümü</button>
      </div>
      {ismapView ? <MapView setDetailId={setDetailId}/> : <ListView setDetailId={setDetailId}/> }
      {detailId && <Modal detailId={detailId} close={() => setDetailId(null)} />}
   </div>
  )
}

export default App
