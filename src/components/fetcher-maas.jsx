import { useState } from "react";

function FormPostMaas() {
  const [resource_Id, setResourceId] = useState("");
  const [username, setUser] = useState("");
  const [starts_At, setStartsAt] = useState("");
  const [ends_At, setEndsAt] = useState("");
  const [loading, setLoading] = useState(false);

  const [resData, setResData] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      resourceId: resource_Id,
      user: username,
      startsAt: new Date(starts_At),
      endsAt: new Date(ends_At)
    };

    try {
      const res = await fetch("https://dv1677-worf.nplab.bth.se/api/test/broker/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);

        setResourceId("");
        setUser("");
        setStartsAt("");
        setEndsAt("");
        
        setResData(JSON.stringify(result, null, 2));
      } else {
        console.log("Error: Request was not accepted");
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
          <label>Username:</label>
          <input type="text" id="user" name="user" value={username} onChange={(e) => setUser(e.target.value)} />
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