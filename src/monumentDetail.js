import { Link } from "react-router-dom";
import "./styles.css";
import logoDBM from "./picture/logoDBM.svg";
import monument from "./picture/monument.png";

function Overview() {
  return (
    <>
      <main>
        <section id="detail-monument">
          {/* <!-- navbar --> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="#" className="navbar-brand pr-5">
              <img src={logoDBM} alt="" />
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
                  <Link className="nav-link" to="">
                    Monument
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="">
                    About&nbsp;Us
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="">
                    FAQ
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="">
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
            <div className="col-sm-4">
              <img src={monument} alt="" width="100%" />
            </div>
            <div className="col-sm-6 content-right">
              <h2>
                <b>Sita Kepandung Monument</b>
              </h2>
              <h4 style={{ color: "#f55330" }}>Simpang Enam Kota Denpasar</h4>
              <div className="col-sm-12 row text-left mb-5">
                <div className="col-sm-4">
                  <div className="row">
                    <img src="picture/dbmBlue.png" alt="" />
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <img src="picture/dbmPurple.png" alt="" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <img src="picture/dbmRed.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card mb-5">
                <div className="card-body">
                  <div className="text-biaya-overview col-sm-4 text-center">
                    <h5>Biaya Pembangunan</h5>
                  </div>
                  <h3>
                    Rp. 4,978,000,000 <sub> ($346.867,54)</sub>
                  </h3>
                </div>
              </div>
              <div className="accordion mb-3" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left d-flex justify-content-between p-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="mt-2">BCA Mobile</div>
                        <span className="navbar-text mr-4">
                          <div>
                            <i
                              className="fa fa-chevron-down"
                              aria-hidden="true"
                              data-toggle="collapse"
                              data-target="#collapse-projects3"
                              aria-expanded="false"
                              aria-controls="collapse-projects3"
                            ></i>
                          </div>
                        </span>

                        <div className="collapse" id="collapse-projects3"></div>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut quam ultrices vel nec ac feugiat imperdiet volutpat,
                        nibh. Facilisis aliquet in diam pulvinar. Nunc fames
                        nulla consectetur tortor. Malesuada viverra porttitor
                        nulla sollicitudin tellus interdum turpis. Placerat ac
                        morbi ornare mi pharetra sed egestas. Sit non lacus
                        fusce in donec. Montes, diam lectus dignissim et in
                        tristique arcu. Sagittis nullam volutpat adipiscing
                        purus convallis. Enim lacus in pharetra sollicitudin
                        proin. Suscipit nulla nec, in sit diam eu sollicitudin
                        mauris pellentesque. Vestibulum vel purus sed sed.
                        Sagittis nullam volutpat adipiscing purus convallis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="row p-3">
            <div className="col-sm-7">
              <img src="picture/logoDBMWhite.svg" alt="" />
            </div>
            <div className="col-sm-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus iste, aliquam nemo, incidunt voluptatibus dolore
              dolorum est odit cupiditate possimus aspernatur ea debitis saepe
              impedit quisquam, hic nihil? Ab, dolor.
            </div>
            <div className="col-sm-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eius beatae ipsa eveniet doloremque sit dicta. Earum dolore
              provident sit, atque, quos nemo animi enim voluptas quod, ab
              eveniet temporibus?
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Overview;
