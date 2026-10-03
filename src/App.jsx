import { fetcher } from './components/fetcher'
import './App.css'

function App() {
  const fetchedData = fetcher(`${import.meta.env.VITE_API_URL}api`);

  if (!fetchedData) {
    return;
  }

  const data = fetchedData.resources;

  return (
    <>
      <section className="center max-height">
        <div className="content">
          <h2>Fetched data from the backend server "/api" route</h2><br />
          <table className="table max-width">
            <thead>
              <tr>
                <th>_id</th>
                <th>type</th>
                <th>name</th>
                <th>description</th>
                <th>capacity</th>
              </tr>
            </thead>


            {data.map((item, index) => (
              <tbody key={item._id}>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.capacity}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </>
  )
}

export default App
