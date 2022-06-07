import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./styles.css";
import map from "./picture/map.png";
import Logo from "./picture/logoDBM.svg";
import Logo2 from "./picture/logoDBMWhite.svg";
import real from "./picture/real.png";
import Modal from "./Modal";

function NFTPage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <main>
        <section id="nft-page" className="mb-5">
          {/* <!-- navbar --> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="#" className="navbar-brand pr-5">
              <img src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <form className="form-inline w-100">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  style={{
                    width: "85%",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="" className="nav-link">
                    Monument
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="" className="nav-link">
                    About&nbsp;Us
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="" className="nav-link">
                    FAQ
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link to="" className="nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <button type="button" className="btn btn-secondary btn-lg">
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row col-sm-12 mt-4 all-content">
            <div
              className="col-sm-2 navbar-left"
              style={{ borderRight: "2px solid #dadada" }}
            >
              <Link to="/">
                <h4>Overview</h4>
              </Link>
              <Link to="/location">
                <h4>Lokasi</h4>
              </Link>
              <Link to="/develop">
                <h4>Pengembang</h4>
              </Link>
              <Link to="/timeline">
                <h4>Timeline</h4>
              </Link>
              <Link to="/progress">
                <h4>Progress</h4>
              </Link>
              <Link to="/fund">
                <h4>Dana</h4>
              </Link>
              <Link to="/nft-page">
                <h4>NFT</h4>
              </Link>
              <Link to="/owner-nft">
                <h4>Pemilik NFT</h4>
              </Link>
              <Link to="/finance-report">
                <h4>Laporan Keuangan</h4>
              </Link>
              <button>Beli NFT</button>
            </div>
            <div class="col-sm-10">
              <div class="row mb-5">
                <div class="col-sm-4 row">
                  <img src="picture/dbmBlue.png" alt="" />
                </div>
                <div class="col-sm-4 row">
                  <img src="picture/dbmPurple.png" alt="" />
                </div>
                <div class="col-sm-4 row">
                  <img src="picture/dbmRed.png" alt="" />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body d-flex flex-row">
                    <div class="col-sm-2">
                      <img src="picture/dbmBlue.png" alt="" />
                    </div>
                    <div class="col-sm-10">
                      <h3>Blue Mark NFT</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolore neque qui recusandae accusantium possimus,
                        quasi corrupti. Exercitationem odit doloremque, placeat
                        quibusdam modi nesciunt numquam facilis laborum possimus
                        explicabo, dolor accusantium. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Quo hic illo ut. Dicta
                        possimus recusandae excepturi fuga aspernatur, saepe
                        natus nulla explicabo odio quibusdam facilis nesciunt.
                        Delectus necessitatibus dolore accusamus.
                      </p>
                      {/* <Link to="/buy-confirm"> */}
                      <button
                        type="button"
                        class="btn btn-dark"
                        onClick={() => setShow(true)}
                      >
                        Show
                      </button>
                      <Modal onClose={() => setShow(false)} show={show} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="p-5">
          <div className="row">
            <div className="row col-sm-9 p-3">
              <div className="col-sm-9">
                <img src={Logo2} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus iste, aliquam nemo, incidunt voluptatibus dolore
                  dolorum est odit cupiditate possimus aspernatur ea debitis
                  saepe impedit quisquam, hic nihil? Ab, dolor. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Repellendus
                  iste, aliquam nemo, incidunt voluptatibus dolore dolorum est
                  odit cupiditate possimus aspernatur ea debitis saepe impedit
                  quisquam, hic nihil? Ab, dolor.
                </p>
              </div>
              <div className="col-sm-3 d-flex flex-column pt-2 pl-5">
                <Link to="">Monument</Link>
                <Link to="">About Us</Link>
                <Link to="">FAQ</Link>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="row text-talk mb-5">
                <img src="picture/call-calling.svg" className="mr-5" alt="" />
                <h3>Let's Talk</h3>
              </div>
              <div className="row mb-5">
                <img src="picture/sms-tracking.svg" className="mr-5" alt="" />
                <div className="col p-0">
                  <h4>DBM Customer Care</h4>
                  <p>support@dbm.com</p>
                </div>
              </div>
              <div className="row">
                <img src="picture/sms-tracking.svg" className="mr-5" alt="" />
                <div className="col p-0">
                  <h4>DBM Developer</h4>
                  <p>developer@dbm.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default NFTPage;