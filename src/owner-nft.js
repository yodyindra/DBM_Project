import { Link } from "react-router-dom";
import "./styles.css";
import map from "./picture/map.png";
import Logo from "./picture/logoDBM.svg";
import Logo2 from "./picture/logoDBMWhite.svg";
import real from "./picture/real.png";

function OwnerNFT() {
  return (
    <>
      <main>
        <section id="detail-monument" className="mb-5">
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
            <div className="col-sm-10">
              <h1>Pemilik NFT</h1>
              <p>Sita Kepandung Monument</p>
              <div className="content-wrapper">
                <section className="content">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-12">
                        <div className="card card-primary card-tabs">
                          <div className="card-header p-0 pt-1">
                            <ul
                              className="nav nav-tabs"
                              id="custom-tabs-one-tab"
                              role="tablist"
                            >
                              <li className="nav-item col-md-2">
                                <a
                                  className="nav-link active text-center"
                                  id="custom-tabs-one-home-tab"
                                  data-toggle="pill"
                                  href="#custom-tabs-one-home"
                                  role="tab"
                                  aria-controls="custom-tabs-one-home"
                                  aria-selected="true"
                                >
                                  Red Mark NFT
                                </a>
                              </li>
                              <li className="nav-item col-md-2">
                                <a
                                  className="nav-link text-center"
                                  id="custom-tabs-one-profile-tab"
                                  data-toggle="pill"
                                  href="#custom-tabs-one-profile"
                                  role="tab"
                                  aria-controls="custom-tabs-one-profile"
                                  aria-selected="false"
                                >
                                  Blue Mark NFT
                                </a>
                              </li>
                              <li className="nav-item col-md-2">
                                <a
                                  className="nav-link text-center"
                                  id="custom-tabs-one-messages-tab"
                                  data-toggle="pill"
                                  href="#custom-tabs-one-messages"
                                  role="tab"
                                  aria-controls="custom-tabs-one-messages"
                                  aria-selected="false"
                                >
                                  Purple Mark NFT
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body">
                            <div
                              className="tab-content"
                              id="custom-tabs-one-tabContent"
                            >
                              <div
                                className="tab-pane fade show active"
                                id="custom-tabs-one-home"
                                role="tabpanel"
                                aria-labelledby="custom-tabs-one-home-tab"
                              >
                                <table className="table">
                                  <thead>
                                    <colgroup>
                                      <col width="75%" />
                                      <col width="15%" />
                                      <col width="10%" />
                                    </colgroup>
                                    <tr>
                                      <th scope="col">Nama</th>
                                      <th scope="col">Jenis NFT</th>
                                      <th scope="col">Jumlah NFT</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#e94342" }}>
                                        Red Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              <div
                                className="tab-pane fade"
                                id="custom-tabs-one-profile"
                                role="tabpanel"
                                aria-labelledby="custom-tabs-one-profile-tab"
                              >
                                <table className="table">
                                  <thead>
                                    <colgroup>
                                      <col width="75%" />
                                      <col width="15%" />
                                      <col width="10%" />
                                    </colgroup>
                                    <tr>
                                      <th scope="col">Nama</th>
                                      <th scope="col">Jenis NFT</th>
                                      <th scope="col">Jumlah NFT</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#4698ff" }}>
                                        Blue Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="custom-tabs-one-messages"
                                role="tabpanel"
                                aria-labelledby="custom-tabs-one-messages-tab"
                              >
                                <table className="table">
                                  <thead>
                                    <colgroup>
                                      <col width="75%" />
                                      <col width="15%" />
                                      <col width="10%" />
                                    </colgroup>
                                    <tr>
                                      <th scope="col">Nama</th>
                                      <th scope="col">Jenis NFT</th>
                                      <th scope="col">Jumlah NFT</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td style={{ color: "#582a7d" }}>
                                        Purple Mark NFT
                                      </td>
                                      <td>2</td>
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
                </section>
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

export default OwnerNFT;
