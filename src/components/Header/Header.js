import React from "react";
import mancha from "../../img/mancha1.png"

import './Header.css'
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " >
        <img className="mancha" src="https://firebasestorage.googleapis.com/v0/b/grill-wings.appspot.com/o/img%2Fmancha1.png?alt=media&token=f066b10e-8ace-47e2-8091-5475d1707e2f" />
        <a className="btn-grill" href="#">
          Grill Wings
        </a>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link  animate__animated animate__bounce" aria-current="page" href="#">
                  Menú
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link animate__animated animate__bounce" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link animate__animated animate__bounce" href="#">
                  Contactanos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled animate__animated animate__bounce">Delivery</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
