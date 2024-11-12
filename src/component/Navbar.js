import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between text-bg-dark">
          <div className="d-flex align-items-center">
            <img
              src="https://imgs.search.brave.com/Ci9mjCPy3ipSoHyqq1dtLb7uckrm6NwJZZVIp4RZqx0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85NC80Mi9h/YnN0cmFjdC1sb2dv/LWxldHRlci1wLWlu/LXRoZS1mb3JtLW9m/LWEtcm9sbGVkLXZl/Y3Rvci0yMzY2OTQ0/Mi5qcGc"
              alt="Logo"
              width="80"
              height="60"
              className="d-inline-block align-text-top"
            />
            <h1 className="mx-2 mt-2"> Portfolio</h1>
          </div>

          <nav className="navbar navbar-expand-lg bg-body-dark">
            <div className="container-fluid">
              <div className="collapse navbar-collapse mx-5 justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-5 ">
                  <a className="nav-link active text-light mx-3 fs-4" href="#">
                    Home
                  </a>
                  <a className="nav-link text-light mx-4 fs-4"  href="#">
                    About
                  </a>
                  <a className="nav-link text-light mx-3 fs-4 "  href="#">
                    Project
                  </a>
                  <a className="nav-link text-light mx-0 fs-4"  href="#">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}
