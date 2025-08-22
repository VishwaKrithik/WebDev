import Display from "./components/Display";
import Header from "./components/Header"
import "./app.css"

function App() {

  const title = "THERMOSTAT";

  return (
    <>
      <div className="dix">
        <Header>{title}</Header>
        <Display />
      </div>
    </>
  )
}

export default App
