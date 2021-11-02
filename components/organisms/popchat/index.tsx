import { useState } from "react";

export default function Popchat() {
  const [chatPopup, setChatPopup] = useState(false)
  return (
    <>
      <div className={`popupChat ${!chatPopup && 'hidden'}`}>
        <a href="#/" className="closePopup" onClick={()=>setChatPopup(false)}>
          <i className="bi bi-x"></i>
        </a>
        <div className="imageBox">
          <img src="/assets//images/team/2.png" alt="" />
        </div>
        <div className="textWrapper">
          <span>Hallo, Saya Inggrit Diana</span>
          <span>Apa yang bisa saya bantu?</span>
        </div>
      </div>
      <div className="direct-chat">
        <a href="#" onMouseEnter={()=>setChatPopup(true)} className="btnChat">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </>
  );
}
