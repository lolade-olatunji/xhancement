import React, { useState, useEffect } from "react";
import "../styles/popup.css";
import Modal from "react-modal";

function Popup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(
    () => {
      if (visible) {
        document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    },
    [visible]
  );

  const closeModal = () => {
    setVisible(false);
  };

   const handleFormSubmit = event => {
     event.preventDefault();
     const formData = new FormData(event.target);
     const formElement = document.createElement("form");
     formElement.method = "post";
     formElement.action = "https://systeme.io/embedded/17382471/subscription";

     formData.forEach((value, key) => {
       const input = document.createElement("input");
       input.type = "hidden";
       input.name = key;
       input.value = value;
       formElement.appendChild(input);
     });

  
     document.body.appendChild(formElement);
     formElement.submit();
     document.body.removeChild(formElement);
     closeModal();
   };


  return (
    <div>
      <Modal
        isOpen={visible}
        className="over"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          },
          content: { top: "50%", left: "50%" }
        }}
      >
        <form
          id="systeme-io-popup"
          onSubmit={handleFormSubmit}
        >
          <div className="top">
            <h2>FILL IN TO CONTINUE</h2>
          </div>
          <input name="text" type="text" placeholder="FirstName" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <div class="f-row">
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
          <div className="we-con">
            <p className="we">
              We hate Spam, Your credientals are 100% secured!
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Popup;
