import { fetcher } from '../components/fetcher.jsx';
import FormHandler from '../components/fetcher-handler.jsx';

function BookingPageNew() {
  const fetchedAvailable= fetcher(`${import.meta.env.VITE_API_URL}api/test/broker/availability`);

  if (!fetchedAvailable) {
    return;
  }

  return (
    <>
      {/* <section className="grid max-height"> */}
        <div className="content">
          <div className='form-container'>
            <FormHandler />
          </div>

          <br />

          <h2>Fetched data from the backend server "/api/test/broker/availability" route</h2><br />

          <table className="table max-width">
            <thead>
              <tr>
                <th>start</th>
                <th>end</th>
                <th>past</th>
              </tr>
            </thead>

            {fetchedAvailable.map((item, index) => (
              <tbody key={item.start}>
                <tr>
                  <td>{item.start}</td>
                  <td>{item.end}</td>
                  <td>{item.past ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      {/* </section> */}
    </>
  )
}

export default BookingPageNew
