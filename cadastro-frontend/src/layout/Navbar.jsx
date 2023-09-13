import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Projeto Spring Boot & React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to={"/adduser"}>+ Usuario</Link>
                </div>
            </nav>
        </>
    );
};

