import React from "react";
import ranch from "../../img/Ranch1.jpeg";
import ajo from "../../img/BandejaAjo.jpeg";
import papas from "../../img/Papas.jpeg";
import logo from "../../img/LOGO.png";
import mancha from "../../img/mancha1.png"
import mancha2 from "../../img/mancha2.png"
import menu1 from "../../img/menu1.jpg"
import menu2 from "../../img/menu2.jpg"
import alitassalsa from "../../img/elementos-3.png"
import alitasajo from "../../img/elementos-2.png"
import alitas3 from "../../img/elementos-4.png"
import flecha from "../../img/flecha.png"
import puntos from "../../img/punto.png"
import fondo from "../../img/fondo_Mesa.png"
import mapa from "../../img/mapa.PNG"
import "./PageIndex.css";


/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */

      const img = require.context('../../img', true)

export default function PageIndex() {
  return (
    <div className="contenedor">
      <div className="section1">
        <div id="carouselExampleControls"   class="carousel slide"  data-bs-ride="carousel" >
          <div className="logo">
            <div className="c-amarillo"></div>
            <div className="content-logo">
              <img src={logo} class="d-block w-100 img-logo" alt="..." />
            </div>
            <a className="btn-sabor  animate__animated animate__bounceInLeft">Sabor a la parrilla</a>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ranch} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ajo} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={papas} class="d-block w-100" alt="..." />
            </div>
          </div>
          
        </div>
        <img src={mancha2} className="mancha2 " alt="..." />
      </div>
      <div className="section2">
         <div className="content-element1">
            <div className="element1" >
            <img src={menu1} class="d-block w-100" alt="..." data-aos="flip-left" />
            </div>
            <div className="element1-2">
            <img src={puntos} className="puntos" alt="..." />
            </div>
            <div className="element2">
            <img src={menu2} class="d-block w-100" alt="..." data-aos="flip-left" />
            </div>
            <div className="element3">
                 <div className="item1-element3">
                       <img src={alitassalsa} class="img-alitassalsa" alt="..." data-aos="fade-down" data-aos-duration="1500" />
                 </div>
                 <div className="item2-element3">
                        <img src={alitasajo} class="img-alitasajo" alt="..."  data-aos="fade-down" data-aos-duration="1500" /> 
                 </div>
            </div>
         </div>
         <div className="content-btn-menu">
         <button className="btn-menu" data-aos="fade-down">Nuestro Menú</button>
         <img src={flecha} class="img-flechas" data-aos="fade-down" alt="..." /> 
         </div>
         <img src={flecha} data-aos="fade-down" class="img-flechas2" alt="..." /> 
         <img src={mancha2} data-aos="fade-down" className="mancha2" alt="..." />
      </div>
      <div className="section3">
         <div className="content-element1">
            <div className="element4">
              <div className="logo-g">
              <img src={logo} data-aos="fade-down" class=" img-logo-2" alt="..." />
              </div>
              <div className="texto" data-aos="fade-down">
                      <p>
                        Somos unos amantes de la parrilla, hemos creado 
                        un menú 100% a la parrilla. Para que puedas comer 
                        tus alitas, choripanes, Steak sánwich y más de una 
                        forma diferente, nuestras alitas tienen dos opciones 
                        de marinaje que van perfectas con nuestras 6 salsas creadas 
                        para que tu experiencia sea única.
                      </p>
              </div>
           
            </div>
            <div className="element5">
            <img src={alitas3} data-aos="fade-down" class="alitas-3" alt="..." />
            </div>
           
         </div>
         <button className="btn-nosotros" data-aos="fade-down">
                   Nosotros
         </button>
         <img src={puntos}data-aos="fade-down" class="puntos-3-n" alt="..." />
         <img src={flecha}data-aos="fade-down" class="flecha-3-n" alt="..." />

      </div>
      <div className="section4">
      
            <div className="content-element-4" >
            
                     <div className="element-7">
                     <img src={mapa} data-aos="fade-down" class="img-mapa" alt="..." />
                     </div>
                     <div className="element-8">
                     <div className="barra"></div>
                     </div>
                     <div className="element-9">
                        <div className="item1-element-9" data-aos="fade-down">
                          <p className="p1">Horarios</p>
                          <p className="p2">Miércoles a Lunes <br/> 12pm-10pm </p> 
                        </div>
                        <div className="item2-element-9">
                            <img src={puntos} data-aos="fade-down" className="puntos-c-4" alt="..." />
                        </div>
                        <div className="item3-element-9">
                               <a><i class="fa-brands fa-instagram-square" data-aos="fade-down"></i></a>
                               <a><i class="fa-brands fa-facebook-square" data-aos="fade-down"></i>  </a> 
                        </div>
                        <div className="item4-element-9" data-aos="fade-down">
                          <a className="p1"> @grillwings_SV </a> <br/>
                          <a className="p2"><span>Teléfono: </span>6973-2234</a>
                        </div>
                     </div>
            </div>
            <button className="btn-contactarnos" data-aos="fade-down">Contactarnos</button>
            <img src={flecha} class="flecha-3-n" alt="..." />
            <img src={logo} className="logo2" alt="..." />
            <img src={fondo} className="fondo-mesa" alt="..." />
      </div>
      <div className="section5">
      
            <div className="content-element-5">
            
                     <div className="element-10">
                         <img src={img(`./1.jpeg`)}data-aos="fade-down" class="w-100" alt="..." />
                     </div>
                     <div className="element-11">
                         <img src={img(`./2.jpeg`)}data-aos="fade-down" class="w-100" alt="..." />
                     </div>
                     <div className="element-12">
                         <img src={img(`./3.jpeg`)} data-aos="fade-down" class="w-100" alt="..." />
                     </div>
                     <div className="element-13">
                         <img src={img(`./4.jpeg`)} data-aos="fade-down" class="w-100" alt="..." />
                     </div>
                     <div className="element-14">
                         <img src={img(`./5.jpeg`)}data-aos="fade-down"  class="w-100" alt="..." />
                     </div>
                     
                    
            </div>
            <div className="btn content-btn-delivery w-100 d-flex justify-content-center">
                     <a href="https://wa.link/4wlwd6" className="btn " >Llama     <i class="fa-brands fa-whatsapp"></i></a>
            </div>
            <button className="btn-contactarnos" data-aos="fade-down">Delivery</button>
            <img src={flecha}data-aos="fade-down" class="flecha-3-n" alt="..." />
            <img src={logo}data-aos="fade-down" className="logo3" alt="..." />
            <img src={fondo} className="fondo-mesa fondo-mesa2" alt="..." />
      </div>
    </div>
    

    );
}
