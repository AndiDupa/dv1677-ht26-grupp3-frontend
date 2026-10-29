import { useState } from "react";

function FormPostCancel() {
  const [secret, setSecret] = useState("");

  const [loading, setLoading] = useState(false);

  const [resData, setResData] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      secret: secret
    };

    try {
      const res = await fetch("https://dv1677-worf.nplab.bth.se/api/test/broker/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("rb_token")}`
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);

        setSecret("");
        
        setResData(JSON.stringify(result, null, 2));
      } else {
        console.log("Error: Request was not accepted. Are you logged in?");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>      
      <form className='grid-form' onSubmit={submitHandler}>
        <p className='form-right'>
          <label>Booking secret:</label>
          <input type="text" id="secret" name="secret" value={secret} onChange={(e) => setSecret(e.target.value)} />
        </p>

        <p className='form-right'>
          <label>Submit</label>
          <button id='submit-cancel'>Submit</button>
        </p>
        
        <p className='form-right'>
          <label>Message:</label>
          <textarea id="msg" name="user_message" value={resData} readOnly />
        </p>
      </form>
    </>
  )
}

export default FormPostCancel;