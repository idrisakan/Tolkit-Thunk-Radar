import { useSelector } from "react-redux";

const Header = () => {
  const {isLoding, error, flights } = useSelector((store) =>store.flightReducer )
  return (
    <header>
<div>
    <img src="/plane-logo.png" alt="" />
    <h3>Uçuş Radarı</h3>
</div>
{ isLoding 
? 
<p>'Uçuşlar Hesaplanıyor' </p>
: error ? 
<p className="error"> Üzgünüz Bir sorun oluştu   {error} </p>
:
<p> {flights.length } Uçuş bulundu</p> 
 }
</header>
  )}

export default Header;
