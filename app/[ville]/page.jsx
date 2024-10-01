'use client'
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";


function Box_1() {
  const Pageville = ({params}) => {
    return <Suspense fallback={<Loading/>}>
        <h1>{params.ville}</h1>
    </Suspense>
    
  }
  
  return (
    <>
      <center>
        <div class="titre">
          <div class="titre1">
            <h1>Météo</h1>
          </div>
        </div>
        <div class="box_1">
          <div class="ville">
          <h1>{params.ville}</h1>
            <img class="localisation" src="img/localisation.png" alt="Localisation" />
          </div>
          <div className="degré">
            <h1>24°C</h1>
          </div>
          <div class="degré2">24° / 14°</div>
          <div class="temps">Essentiellement nuageux</div>
        </div>
      </center>
    </>
  );
}

export default Box_1;
