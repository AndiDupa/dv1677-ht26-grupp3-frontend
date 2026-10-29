import { useState } from "react";

function FormPostMaas() {
  const [resource_Id, setResourceId] = useState("");
  const [starts_At, setStartsAt] = useState("");
  const [ends_At, setEndsAt] = useState("");
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem("rb_user").slice(1,-1);

  const [resData, setResData] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      resourceId: resource_Id,
      user: user,
      startsAt: new Date(starts_At),
      endsAt: new Date(ends_At)
    };

    try {
      const res = await fetch("https://dv1677-worf.nplab.bth.se/api/test/broker/book", {
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

        setResourceId("");
        setStartsAt("");
        setEndsAt("");
        
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
          <label>Resource Id:</label>
          <input type="text" id="resourceId" name="resourceId" value={resource_Id} onChange={(e) => setResourceId(e.target.value)} />
        </p>
        <p className='form-right'>
          <label>Starts at:</label>
          <input type="datetime-local" id="startsAt" name="startsAt" value={starts_At} onChange={(e) => setStartsAt(e.target.value)} />
        </p>
        <p className='form-right'>
          <label>Ends at:</label>
          <input type="datetime-local" id="endsAt" name="endsAt" value={ends_At} onChange={(e) => setEndsAt(e.target.value)} />
        </p>

        <p className='form-right'>
          <label>Submit</label>
          <button id='submit-maas'>Submit</button>
        </p>
        
        <p className='form-right'>
          <label>Message:</label>
          <textarea id="msg" name="user_message" value={resData} readOnly />
        </p>
      </form>
    </>
  )
}

export default FormPostMaas;