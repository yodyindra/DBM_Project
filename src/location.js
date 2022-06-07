import { Link } from "react-router-dom";
import "./styles.css";
import map from "./picture/map.png";
import Logo from "./picture/logoDBM.svg";
import Logo2 from "./picture/logoDBMWhite.svg";
import real from "./picture/real.png";

function Location() {
  return (
    <>
      <main>
        <section id="detail-monument" class="mb-5">
          {/* <!-- navbar --> */}
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand pr-5" href="#">
              <img src={Logo} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <form class="form-inline w-100">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  style={{
                    width: "85%",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }}
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul class="navbar-nav mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    Monument
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    About&nbsp;Us
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    FAQ
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="">
                    Login
                  </a>
                </li>
                <li>
                  <button type="button" class="btn btn-secondary btn-lg">
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          <div class="row col-sm-12 mt-4 all-content">
            <div
              class="col-sm-2 navbar-left"
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
              <img src={map} alt="" class="img-fluid mb-5" />
              <div class="col-sm-12 row">
                <div class="col-sm-4">
                  <img src={real} class="img-fluid" alt="" />
                </div>
                <div class="col-sm-8 content-right">
                  <div class="accordion mb-3" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <button
                            class="btn btn-link btn-block text-left d-flex justify-content-between p-0"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div class="mt-2">Detail Lokasi</div>
                            <span class="navbar-text mr-4">
                              <div>
                                <i
                                  class="fa fa-chevron-down"
                                  aria-hidden="true"
                                  data-toggle="collapse"
                                  data-target="#collapse-projects3"
                                  aria-expanded="false"
                                  aria-controls="collapse-projects3"
                                ></i>
                              </div>
                            </span>

                            <div class="collapse" id="collapse-projects3"></div>
                          </button>
                        </h2>
                      </div>

                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <table>
                            <tbody>
                              <tr>
                                <th scope="row">Lokasi</th>
                                <td>:</td>
                                <td>Kawasan Simpang Enam Kota Denpasar</td>
                              </tr>
                              <tr>
                                <th scope="row">Desa</th>
                                <td>:</td>
                                <td>Desa Dauh Puri</td>
                              </tr>
                              <tr>
                                <th scope="row">Kecamatan</th>
                                <td>:</td>
                                <td>Kecamatan Denpasar Barat</td>
                              </tr>
                              <tr>
                                <th scope="row">Kota</th>
                                <td>:</td>
                                <td>Kota Denpasar</td>
                              </tr>
                              <tr>
                                <th scope="row">Provinsi</th>
                                <td>:</td>
                                <td>Provinsi Bali</td>
                              </tr>
                              <tr>
                                <th scope="row">Koordinat</th>
                                <td>:</td>
                                <td>-8.674216504661091, 115.20667466725344</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="p-5">
          <div class="row">
            <div class="row col-sm-9 p-3">
              <div class="col-sm-9">
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
              <div class="col-sm-3 d-flex flex-column pt-2 pl-5">
                <a href="">Monument</a>
                <a href="">About Us</a>
                <a href="">FAQ</a>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="row text-talk mb-5">
                <img src="picture/call-calling.svg" class="mr-5" alt="" />
                <h3>Let's Talk</h3>
              </div>
              <div class="row mb-5">
                <img src="picture/sms-tracking.svg" class="mr-5" alt="" />
                <div class="col p-0">
                  <h4>DBM Customer Care</h4>
                  <p>support@dbm.com</p>
                </div>
              </div>
              <div class="row">
                <img src="picture/sms-tracking.svg" class="mr-5" alt="" />
                <div class="col p-0">
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

export default Location;
