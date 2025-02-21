import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import Tugas from './Tugas';

// Praktikum

function Example() {
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const hanldeEmailChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <input type="number" placeholder="umur" value={age} onChange={handleAgeChange} />
      <input type="email" placeholder="Email" value={email} onChange={hanldeEmailChange} />

      <p>{name} berumur {age} tahun dan emailnya adalah {email }</p>
    </div>
  )

}

// Komponen Header
function Header() { 
  return(
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

// Komponen footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  )
}

// Komponen App yang menggunakan Header, Main, dan Footer
function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Greeting name="John"/>
      <Counter/>
      <Example />
      <Footer/>
      <Tugas name="Pertemuan 2"/>
      <Hasil/>
    </div>
  );
}
export default App; // Untuk mengexport komponen App

// Tugas
function Hasil(){
  // state untuk menyimpan daftar tugas setiap hari
  const [senin,setSenin] = useState([]);

  // state untuk menyimpan input sementara
  const [inputSenin, setInputSenin] = useState("");
  const [inputHapusSenin, setInputHapusSenin] = useState("");

  const tambahTugas = () => {
    if (inputSenin.trim() !== "") {
      setSenin([...senin, inputSenin]); // Menambahkan tugas ke array
      setInputSenin(""); // Mengosongkan input setelah menambah
    }
  };

  const HapusTugas = (arr, value)=>{
    setSenin(senin.filter(item => item !== inputHapusSenin));
    setInputHapusSenin("");
  }

  return (
    <div>
      <table>
        <tr>
          <th>Senin</th>
        </tr>
        <tr>
          <td><input type="text" placeholder="tambah tugas" value={inputSenin} onChange={(e)=>setInputSenin(e.target.value)} /></td>
          <button onClick={() => tambahTugas()}>Tambah</button>
        </tr>
        <tr>
          <td><input type="text" placeholder="Hapus Tugas" value={inputHapusSenin} onChange={(e)=>setInputHapusSenin(e.target.value)}></input></td>
          <button onClick={()=> HapusTugas()}>Hapus</button>
        </tr>
        {/* Menampilkan list */}
        <tr>
          <td>
            <ul>
              {senin.map((task, index) => (<li key={index}>{task}</li>))}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}