import { Form1, ReactHookForm, Signup } from "./components";

function App() {
  return (
    <div className="App">
      {/* //usando useFormik */}
      <Signup />
      {/* //sin useFormik */}
      <Form1 />
      <ReactHookForm />
    </div>
  );
}

export default App;
