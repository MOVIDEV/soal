//! pecahkan soal dibawah ini
//! 1 buat komponen memiliki hasil penambahan masing - masing
//! 2 buat & gunakan HOC
"use client"

import { useState } from "react";
export default function Home() {
  
    const [nomor, setNomor] = useState(0);

    const handlerNomor = () =>{
      setNomor(nomor + 1);
    };
  
  return (
    <div>
      <div>
      <h3>x + 1</h3>
<p>{nomor}</p>
<button onClick={handlerNomor}>tambah</button>
      </div>
<div>
  <h3>x + 1</h3>
  <p>{nomor}</p>
  <button onClick={handlerNomor}>tambah</button>
</div>
    </div>

    
  )
}