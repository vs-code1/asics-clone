import { useState } from "react";
import "./shoeList.css";

const asicsShoes = [
  {
    id: 0,
    imgSrc:
      "//storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B547_400_SR_RT_GLB.jpg",
    shoeModel: "GEL-NIMBUS 25",
    price: "₹15,999.00"
  },
  {
    id: 1,
    imgSrc:
      "//storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B547_300_SR_RT_GLB.jpg",
    shoeModel: "GEL-NIMBUS 25",
    price: "₹15,999.00"
  },
  {
    id: 3,
    imgSrc:
      "//storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B619_300_SR_RT_GLB.jpg",
    shoeModel: "GEL-NIMBUS 25 LITE-SHOW",
    price: "₹16,999.00"
  },
  {
    id: 4,
    imgSrc:
      "//storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B616_001_SR_RT_GLB.jpg",
    shoeModel: "GEL-NIMBUS 25 PLATINUM",
    price: "₹16,999.00"
  }
];

function ShoeList() {
  const [shoeList, setShoeList] = useState(asicsShoes);
  return (
    <div className="shoe-list-section-bg">
      <h1>MEN'S</h1>
      <div className="shoe-list-section">
        {shoeList.map((shoe) => (
          <div key={shoe.id} className="shoe-list">
            <div className="shoe-list-img">
              <a href="#">
                <img src={shoe.imgSrc} alt={shoe.shoeModel} />
              </a>
            </div>
            <div className="shoe-list-text">
              <h2>{shoe.shoeModel}</h2>
              <p>{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoeList;
