import { useState } from "react"
import axios from "axios"


function App() {
  const [email, setEmail] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault()
    const data = {
      email
    }
    const response = await axios.post("http://localhost:8000/api/sendemail", data)
    console.log(response.data);

  }
  return (
    <div className="--flex-center --bg-primary --100vh" >
      <div className="--width-500px --card --p --bg-light" >
        <form className="--form-control" onSubmit={sendMessage}>
          <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="--btn --btn-primary" type="submit">Send Email</button>

        </form>
      </div>
    </div >
  );
}

export default App;
