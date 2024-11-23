"use client";

import Image from "next/image";
import Link from 'next/link';
import Dataviz1 from "@/app/componentes/Visualizacion1"
import Dataviz2 from "@/app/componentes/Visualizacion2"
import Dataviz3 from "@/app/componentes/Visualizacion3"
import Dataviz4 from "@/app/componentes/Visualizacion4"
import Dataviz5 from "@/app/componentes/Visualizacion5"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';




export default function Home() {
  return (
<main className="flex flex-col min-h-screen">

<div className="relative w-full h-full">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/Videointro.mp4" type="video/mp4" />
    Tu navegador no soporta la reproducción de videos.
  </video>

  <div className="absolute bottom-20 left-10 transform px-10 flex flex-col items-start">
    <h1 className="text-white text-5xl font-bold">
      Ciudades Costeras
    </h1>
    <h2 className="text-white text-8xl font-bold mt-4">
      Y la Amenaza del Cambio
    </h2>
    <h3 className="text-white text-8xl font-bold mt-4">
      Climático
    </h3>
  </div>
</div>

<div className="px-32">

<div className="flex flex-col items-center mt-32">

  <div className="w-full p-8">
    <h2 className="text-black text-5xl font-bold mb-6">
      ¿Qué es el cambio climático?
    </h2>
    <p className="text-black text-2xl mt-16">
      El cambio climático se refiere a los cambios a largo plazo de las temperaturas y los patrones climáticos. Estos cambios pueden ser naturales, debido a variaciones en la actividad solar o erupciones volcánicas grandes. Pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas. La quema de combustibles fósiles genera emisiones de gases de efecto invernadero que actúan como una manta que envuelve a la Tierra, atrapando el calor del sol y elevando las temperaturas.
      Las emisiones principales de gases de efecto invernadero que provocan el cambio climático son el dióxido de carbono y el metano. Estos proceden del uso de la gasolina para conducir un coche o del carbón para calentar un edificio, por ejemplo. El desmonte de tierras y bosques también puede liberar dióxido de carbono. La agricultura y las actividades relacionadas con el petróleo y el gas son fuentes importantes de emisiones de metano. La energía, la industria, el transporte, los edificios, la agricultura y el uso del suelo se encuentran entre los principales emisores.
    </p>
  </div>

  <div className="w-screen flex justify-center mt-32">
    <img src="foto.jpg" alt="Planeta Tierra" className="w-screen h-auto" />
  </div>
</div>


<p className="text-black text-5xl font-bold mt-32 px-8 leading-normal">
  Causas Principales
</p>
 
<div className="w-full p-8">
<p className="text-black text-2xl  mt-6 inline-block mb-6">
    Desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas. La quema de combustibles fósiles genera emisiones de gases de efecto invernadero que actúan como una manta que envuelve a la Tierra, atrapando el calor del sol y elevando las temperaturas.
    Las emisiones principales de gases de efecto invernadero que provocan el cambio climático son el dióxido de carbono y el metano. Estos proceden del uso de la gasolina para conducir un coche o del carbón para calentar un edificio, por ejemplo. El desmonte de tierras y bosques también puede liberar dióxido de carbono. La agricultura y las actividades relacionadas con el petróleo y el gas son fuentes importantes de emisiones de metano. La energía, la industria, el transporte, los edificios, la agricultura y el uso del suelo se encuentran entre los principales emisores.
    </p>
  </div>

  <div className="flex justify-center items-center w-full mt-6 mb-12">
    <Dataviz3 />
  </div>

<h2 className="text-black text-5xl font-bold mt-32 mb-6 leading-normal">
      ¿Cómo Afecta el Cambio Climático a <br />
      las Ciudades Costeras?
    </h2>

<div className="flex items-start justify-center items-center mt-12">

  <div className="w-full md:w-1/2 flex">
    <img src="iceberg1.png" alt="Iceberg" className="w-3/4 h-auto" />
  </div>

  
  <div className="w-full md:w-1/2 p-6 ">
    <p className="text-black text-2xl max-w-prose">
    Los glaciares se derriten a un ritmo nunca visto anteriormente, el nivel del mar aumentadebido al deshielo, las selvas se secan y la fauna y la flora alteran sus ciclos vitales y luchan para sobrevivir en un escenario de cambios vertiginosos y complejos que a menudo impactan gravemente en la biodiversidad. Un aumento general de las temperaturas, fenómenos meteorológicos extremos, olas de calor e inundaciones, falta de cosechas, migrantes climáticos y un largo etcétera de consecuencias que ponen al cambio climáticoen primera línea de la agenda global por sus efectos a nivel mundial. La evidencia científica declara que la actividad industrial humana ha causado la mayor parte del calentamiento global del siglo pasado mediante la emisión de gases de efecto invernadero, que retienen el calor y cuyos niveles son cada vez más altos.
    </p>
  </div>
</div>

<div className="flex justify-center items-center w-3/4 mt-24 mb-16 mx-auto">
    <Dataviz2 />
  </div>


  <p className="text-black text-5xl font-bold mt-64 mb-6">
    Temperatura media global y proyecciones
    </p>

<div className="flex items-start justify-center items-center mt-12">
<div className="w-full md:w-1/2 p-6 ">
    <p className="text-black text-2xl max-w-prose">
    La temperatura media global ha aumentado a un ritmo acelerado en los últimos años, y se espera que continúe en los próximos años. Este aumento de la temperatura media de la Tierra es el calentamiento global. Al igual que cuando tenemos fiebre unos pocos grados respecto de nuestra temperatura normal nos afectan profundamente, ese aumento de temperatura media es suficiente para que el clima cambie de forma acelerada y profunda. Se prevé que las temperaturas para fin de siglo (2090-2099), respecto a 1980-1999, aumentarán entre 1,8 y 4 ºC, según los escenarios (0,1 ºC/década, al menos). El nivel del mar aumentara tanto por la expansión del agua por el calor como por la fusión de los glaciares continentales.
    </p>
  </div>

  <div className="w-full md:w-1/2 flex justify-center">
    <img src="Ilustraciones_svg-03.svg" alt="Termometro" className="w-3/4 h-auto" />
  </div>
</div>

<div className="text-black text-4xl font-bold p-4 mt-64 rounded-full">
    <p>Nueva York 2024 - 2100</p>
  </div>

<div className="flex justify-center items-center w-full mt-6">
  <Dataviz4 />
</div>

<div className="text-black text-4xl font-bold p-4 rounded-full">
    <p>Miami 2024 - 2100</p>
</div>

<div className="flex justify-center items-center w-full mt-6 mb-12">
  <Dataviz5 />
</div>

<div className="text-black text-5xl font-bold p-4 rounded-full mb-12">
    <p>Lugares de alta proyeccion</p>
</div>

<div className="flex items-start justify-center items-center mt-32">
  <img src="mapamapa.svg" alt="Mapa mundial" className="w-full h-auto" />
</div>

<div className="flex items-start justify-center items-center mt-32">
  <img src="mapa_svgg-16.svg" alt="Mapa mundial" className="w-full h-auto" />
</div>

<div className="w-full rounded-xl p-12 mt-16">
  <div className="w-full text-center">
    <p className="text-black text-5xl font-bold rounded-full p-12 inline-block">
    ¿Cómo afecta el cambio climático a las ciudades costeras?
    </p>
  </div>
  <div className="w-full">
    <p className="text-black text-3xl rounded-full p-12 inline-block">
    El cambio climático tiene un impacto significativo en las ciudades costeras debido a varios factores relacionados con el aumento del nivel del mar, fenómenos climáticos extremos y otros efectos. A continuación, se detallan algunas de las formas principales en las que las ciudades costeras se ven afectadas:
    </p>
  </div>
  </div>

  <div className="w-full text-center mt-16">
        <p className="text-black text-5xl font-bold rounded-full p-12 inline-block">
        Ciudades costeras amenazadas por el cambio climático
        </p>
      </div>

<div className="w-full mt-12 mb-12">
        <Dataviz1 />
      </div>



<div className="w-full text-center mt-16">
        <p className="text-black text-5xl font-bold rounded-full p-12 inline-block">
        Soluciones que ya se implementaron
        </p>
      </div>


      <div className="relative mt-16">
  <Image
    src="/solucion2.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={400}
    objectFit="cover"
    objectPosition="top"
    className="rounded-lg"
    priority
  />
  
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="bg-gray-300 text-black text-3xl font-bold px-8 py-2 rounded-full max-w-full text-center" style={{ backgroundColor: '#EBEBEB' }}>
      <p>Roterdam, Barrera Holandesa</p>
    </div>
  </div>
</div>

<div className="w-full text-center mt-16">
  <Link href="https://es.euronews.com/green/2019/10/14/roterdam-la-barrera-holandesa-contra-el-aumento-del-nivel-del-mar" target="_blank" rel="noopener noreferrer">
    <p className="text-blue-600 underline text-2xl">
      Leer más sobre la barrera holandesa contra el aumento del nivel del mar
    </p>
  </Link>
</div>


<div className="relative mt-16">
  <Image
    src="/solucion1.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={400}
    objectFit="cover"
    objectPosition="top"
    className="rounded-lg"
    priority
  />
  
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="bg-gray-300 text-black text-3xl font-bold px-8 py-2 rounded-full">
      <p>Venecia, El MOSE</p>
    </div>
  </div>
</div>

<div className="w-full text-center mt-16">
  <Link href="https://rpp.pe/mundo/actualidad/italia-venecia-el-mose-la-eterna-obra-que-deberia-proteger-a-la-ciudad-de-la-emergencia-climatica-noticia-1229643" target="_blank" rel="noopener noreferrer">
    <p className="text-blue-600 underline text-2xl">
      Leer más sobre el proyecto MOSE
    </p>
  </Link>
</div>


<div className="relative mt-16">
  <Image
    src="/solucion3.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={400}
    objectFit="cover"
    objectPosition="top"
    className="rounded-lg"
    priority
  />

  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="bg-gray-300 text-black text-3xl font-bold px-8 py-2 rounded-full max-w-full text-center">
      <p>Singapur, Ciudades Esponja</p>
    </div>
  </div>
</div>

<div className="w-full text-center mt-16">
  <Link href="https://www.metalocus.es/es/noticias/kongjian-yu-autor-del-concepto-ciudades-esponja-gana-el-premio-global-oberlander" target="_blank" rel="noopener noreferrer">
    <p className="text-blue-600 underline text-2xl">
      Leer más sobre las ciudades esponja en Singapur
    </p>
  </Link>
</div>
</div>



    </main>
  );
}
