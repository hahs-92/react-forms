import { Form1, Signup } from "./components";

function App() {
  return (
    <div className="App">
      {/* //usando useFormik */}
      <Signup />
      {/* //sin useFormik */}
      <Form1 />
    </div>
  );
}

export default App;
