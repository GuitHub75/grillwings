import React from "react";
import mancha from "../../img/mancha1.png"
import './Header.css'
export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <img className="mancha" src={mancha} />
        <a class="btn-grill" href="#">
          Grill Wings
        </a>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Menú
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contactanos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Delivery</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
