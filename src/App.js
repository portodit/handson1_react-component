import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import History from './components/History';

function App() {
  const [countHistory, setCountHistory] = useState([]);

  const handleUpdateHistory = (action, count) => {
    const time = new Date().toLocaleTimeString();
    const newHistory = `Skor ${action} 1, skor terkini ${count} pada pukul ${time}`;
    setCountHistory([newHistory, ...countHistory]);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <div className="container">
          <h1>Hands-on Hacker FE Class Day 1</h1>
          <h2>Materi: React Component</h2>
          <div className="data-diri">
            <p>Nama Lengkap: I Putu Adhitya Pratama Mangku Purnama</p>
            <p>Mentee: Hacker Frontend 9</p>
          </div>
          <div className="notification">
            Ini merupakan hands-on yang mempraktikkan secara langsung bagaimana pembuatan React Component dengan studi kasus implementasi counter dan riwayat perubahan skor. Pada sesi ini, saya mengeksplorasi bagaimana state dan props cara bekerja di dalam React, serta cara mengelola komponen untuk membangun UI yang interaktif.
          </div>
        </div>

        <div className="container">
          <h2>Skor Counter</h2>
          <Counter initialCount={0} onUpdate={handleUpdateHistory} />
        </div>

        <div className="container">
          <h2>Riwayat Penggunaan Counter</h2>
          <History countHistory={countHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;
