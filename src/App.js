import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import './App.css';

function App() {
  async function d() {
    try {
      const res = await fetch("http://localhost:5000");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function chatting() {
    try {
      const f = new FormData();
      f.append("message", document.getElementById("msg").value);  // FormData에 message 값 추가

      const res = await fetch("http://localhost:5000/c/chat", {
        method: "POST",
        body: f
      });

      const data = await res.json();
      document.getElementById("resp").innerText = data.response;
    } catch (error) {
      console.error("채팅 중 오류 발생:", error);
    }
  }

  const s = {
    display: 'flex'
  };

  const resp = {
    width: '500px',
    height: '500px',
    border: '1px solid gray',
  };

  return (
    <>
      <div id="resp" style={resp}>

      </div>
      <div style={s}>
        <input type="text" name="msg" id="msg" placeholder="무엇이든 물어보세요" required />
        <button onClick={chatting}>전송</button>
      </div>
      <button onClick={d}>이거는 신기한 거</button><br />
    </>
  );
}

export default App;
