"use client";

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-start justify-start p-24 bg-white">
      
      <h6 className="text-8xl mt-40 mb-60 text-black text-left self-start">
  El <strong className="font-bold">cambio climático</strong> y<br /> 
  la amenaza frente<br />
  a las ciudades costeras
</h6>


      <h5 className="text-2xl mt-60 mb-0 text-black font-bold self-start">Paleta de colores</h5>
      <img src="/losquefaltan-03.svg" alt="Visualización 03" className="w-[400px] h-auto mb-0 mt-0" />


      <h1 className="text-2xl mt-20 mb-0 text-black font-bold self-start">Cantidad según proyección de crecimiento de nivel de mar</h1>

      <img src="/losquefaltan-04.svg" alt="Visualización 04" className="w-[300px] h-auto mb-0 mt-0" />


      <h2 className="text-2xl  mt-20 mb-0 text-black font-bold self-start">Impacto huella de carbono en la ciudad (más círculos más impacto)</h2>

      <img src="/losquefaltan-05.svg" alt="Visualización 05" className="w-[600px] h-auto mb-0 mt-0" />

 
      <h3 className="text-2xl  mt-20 mb-0 text-black font-bold self-start">Qué tan grande es la amenaza de inundación en esa ciudad <br /> 
      (más anillos más amenaza)<br />
      </h3>
      <img src="/losquefaltan-06.svg" alt="Visualización 06" className="w-[300px] h-auto mb-0 mt-0" />

      <p className="text-2xl mt-20 mb-0 text-black font-bold self-start">
    Proyección de área terrenal de una ciudad costera a través de los años
      </p>


      <div className="flex flex-row space-x-4">
      <img src="/losquevan-11.svg" alt="Visualización 11" className="w-[250px] h-auto mb-0 mt-8" />
      <img src="/losquevan-12.svg" alt="Visualización 12" className="w-[250px] h-auto mb-0 mt-8" />
      <img src="/losquevan-13.svg" alt="Visualización 13" className="w-[250px] h-auto mb-0 mt-8" />
      </div>
      
    

      <h4 className="text-2xl  mt-20 mb-0 text-black font- bold self-start">Ejemplos:</h4>

      <div className="flex flex-row space-x-4">
      <img src="/losquevan-07.svg" alt="Visualización 07" className="w-[600px] h-auto mb-0 mt-0" />
      <img src="/losquevan-08.svg" alt="Visualización 08" className="w-[600px] h-auto mb-0 mt-0" />
      </div>

      <div className="flex flex-row space-x-4">
      <img src="/losquevan-09.svg" alt="Visualización 09" className="w-[600px] h-auto  mb-0 mt-0" />
      <img src="/losquevan-10.svg" alt="Visualización 10" className="w-[600px] h-auto mb-0 mt-0" />
      </div>

    </main>
  );
}
