import "./App.css"
import { useEffect, useState } from "react";
import getData from "./database/db.js";
import { Card } from "./components/index.jsx";
function App() {
  const telegram = window.Telegram.WebApp;
  const [data, setData] = useState([]);
  let [shopItems, setShopItems] = useState([]);
  const addItem = (id) => {
    let findShopItem = shopItems.find((shop) => shop.id == id);
    if(findShopItem){ 
        const idx = shopItems.findIndex((shop) => shop.id == id)
        shopItems[idx].quantity += 1;
        setShopItems(shopItems)
      }else{  
      findShopItem = data.find((shop) => shop.id == id)  
      shopItems = [...shopItems, {...findShopItem, quantity: 1}]  
      setShopItems(shopItems)
    } 
  };
  const removeItem = (id) => {
    const findShopItemIdx = shopItems.findIndex((shop) => shop.id == id);
    if(!(findShopItemIdx == -1)){
      if(shopItems[findShopItemIdx].quantity > 1){
        shopItems[findShopItemIdx].quantity -= 1;
      }else shopItems.splice(findShopItemIdx, 1);
    }
    setShopItems(shopItems);
  }
  const handleTelegramApp = () => {
    telegram.MainButton.text = "Sotib olish :)";
    telegram.MainButton.show();
  }
  useEffect(() => {
    setData(getData());
  }, []);
  return (
    <div className="App">
      <div className="parent_info">
        <h1>Online Fast Food</h1>
        <div className="parent_price_info">
          <p>Umumiy narx: <span>12 so'm</span></p>
          <button onClick={handleTelegramApp}>Buyurtma</button>
        </div>
      </div>
      <div className="card_container">
        {data.map((item) => (
          <Card shopItems={shopItems} {...item} key={item.id} addItem={addItem} removeItem={removeItem}/>
        ))}
      </div>
    </div>
  )
}

export default App;