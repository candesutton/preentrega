"use client";

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24">
      
      
      <p className="text-3xl mb-0 mt-4 text-white font-normal text-center">LENGUAJE VISUAL</p>

      <p className="text-6xl mb-64 mt-96 text-white font-normal text-center">
      EL IMPACTO DEL CAMBIO CLIMATICO EN LAS <span className="font-bold">CIUDADES COSTERAS</span>
      </p>


      <h1 className="text-4xl mb-0 mt-24 text-black font-bold text-center">PALETA DE COLORES</h1>
      <img src="/paleta.svg" alt="Visualización 01" className="w-[500px] h-auto mb-0 mt-16 mx-auto" />


      <h2 className="text-4xl mt-40 mb-0 text-black font-bold text-center">FORMA PRINCIPAL</h2>
      <img src="/forma_principal.svg" alt="Visualización 02" className="w-[400px] h-auto mb-0 mt-16 mx-auto" />


      <h3 className="text-3xl mt-40 mb-0 text-black font-bold text-center">ANALISIS</h3>
      <div className="text-black mx-auto text-justify text-center max-w-4xl mt-10 mb-10">
        <h4 className="text-2xl font-400">
          LA FORMA ORGÁNICA Y FLUIDA DE ESTA FIGURA, JUNTO CON SU GRADIENTE DE AZUL A BLANCO, EVOCA EL AGUA Y LAS TRANSICIONES NATURALES, LO QUE LA HACE IDEAL PARA REPRESENTAR EL IMPACTO DEL CAMBIO CLIMÁTICO EN LAS CIUDADES COSTERAS. EL CENTRO VACÍO SIMBOLIZA LA PÉRDIDA DE TIERRAS Y ESPACIOS HABITABLES POR EL AUMENTO DEL NIVEL DEL MAR, MIENTRAS QUE LOS FRAGMENTOS ALREDEDOR SUGIEREN EFECTOS SECUNDARIOS COMO LA EROSIÓN Y LA DESTRUCCIÓN DE ECOSISTEMAS. SU ABSTRACCIÓN PERMITE MÚLTIPLES INTERPRETACIONES, GENERANDO UN IMPACTO VISUAL QUE REFLEJA LA COMPLEJIDAD Y LOS EFECTOS DISPERSOS DEL CAMBIO CLIMÁTICO.
        </h4>
      </div>

      
      <h5 className="text-3xl mt-40 mb-10 text-black font-bold text-center">+/- TAMAÑO SEGÚN PROYECCIÓN DE CRECIMIENTO DE NIVEL DE MAR</h5>
      
      <div className="flex justify-center space-x-24 mt-16">
        <img src="/forma_principal.svg" alt="Visualización 03" className="w-[200px] h-auto mb-0" />
        <img src="/forma_principal.svg" alt="Visualización 04" className="w-[300px] h-auto mb-0" />
      </div>


      <h6 className="text-3xl mt-40 mb-0 text-black font-bold text-center">IMPACTO HUELLA DE CARBONO EN LA CIUDAD<br />((MAS RELLENO = MAYOR IMPACTO))</h6>
      <div className="flex justify-center space-x-24 mt-16">
        <img src="/impacto_huella.svg" alt="Visualización 05" className="w-[300px] h-auto mb-10" />
        <img src="/forma_principal.svg" alt="Visualización 06" className="w-[300px] h-auto mb-10" />
      </div>


      <p className="text-3xl mt-40 mb-0 text-black font-bold text-center">IMPACTO HUELLA DE CARBONO EN LA CIUDAD<br />(MÁS FORMAS MÁS IMPACTO)</p>
      <div className="flex justify-center space-x-24 mt-16">
        <img src="/impacto_huella_ciudad_2.svg" alt="Visualización 05" className="w-[300px] h-auto mb-10" />
        <img src="/impacto_huella_ciudad.svg" alt="Visualización 06" className="w-[300px] h-auto mb-10" />
      </div>


      <p className="text-3xl mt-40 mb-0 text-black font-bold text-center">PROYECCIÓN DE ÁREA TERRENAL DE UNA CIUDAD COSTERA <br />
      (+ ANCHO + PROYECCIÓN)</p>
      <div className="flex justify-center space-x-24 mt-16">
        <img src="/visu-07.svg" alt="Visualización 07" className="w-[300px] h-auto mb-10" />
        <img src="/visu-06.svg" alt="Visualización 08" className="w-[300px] h-auto mb-10" />
      </div>

      <p className="text-3xl mt-40 mb-0 text-black font-bold text-left">EJEMPLOS DE APLICACIÓN EN CIUDADES</p>

      <div className="flex space-x-4">
        <div className="flex-1">
        <p className="text-4xl text-left text-black mt-32">MIAMI</p>
        <img src="/visu-08.svg" alt="Visualización 08" className="w-[300px] h-auto mt-12 mb-0 ml-48" />
        <p className="text-4xl text-left text-black mt-32">NUEVA YORK</p>
        <img src="/visu-10.svg" alt="Visualización 09" className="w-[300px] h-auto mt-16 mb-0 ml-48" />
        </div>
        <div className="flex-1">
        <p className="text-4xl text-left text-black mt-32">DHAKA</p>
        <img src="/visu-09.svg" alt="Visualización 10" className="w-[300px] h-auto mt-12 mb-0 ml-48" />
        <p className="text-4xl text-left text-black mt-32">BUENOS AIRES</p>
        <img src="/visu-11.svg" alt="Visualización 11" className="w-[300px] h-auto mt-16 mb-0 ml-48" />
      
        </div>
      </div>


    </main>
  );
}
