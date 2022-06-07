import { Link } from "react-router-dom";
import "./styles.css";
import map from "./picture/map.png";
import Logo from "./picture/logoDBM.svg";
import Logo2 from "./picture/logoDBMWhite.svg";
import real from "./picture/real.png";
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';

function Timelines() {
  return (
    <>
      <main>
        <section id="detail-monument" className="mb-5">
          {/* <!-- navbar --> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" className="navbar-brand pr-5">
              <img src={Logo} alt="" />
            </a>
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
                  <a className="nav-link" href="">
                    Monument
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="">
                    About&nbsp;Us
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="">
                    FAQ
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="">
                    Login
                  </a>
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
              <h1>Timeline</h1>
              <p>Sita Kepandung Monument</p>
              <div class="card mb-4">
                <div class="card-header">
                  <h3>27 Desember 2021</h3>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt, laborum? Nesciunt, voluptatibus labore temporibus
                    nam optio quam dignissimos? Doloribus accusantium impedit
                    nisi perspiciatis maxime voluptatum sapiente nesciunt aut
                    quos quo.
                  </p>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">
                  <h3>1 Januari 2022</h3>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt, laborum? Nesciunt, voluptatibus labore temporibus
                    nam optio quam dignissimos? Doloribus accusantium impedit
                    nisi perspiciatis maxime voluptatum sapiente nesciunt aut
                    quos quo.
                  </p>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">
                  <h3>1 Januari 2023</h3>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt, laborum? Nesciunt, voluptatibus labore temporibus
                    nam optio quam dignissimos? Doloribus accusantium impedit
                    nisi perspiciatis maxime voluptatum sapiente nesciunt aut
                    quos quo.
                  </p>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">
                  <h3>1 Januari 2024</h3>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt, laborum? Nesciunt, voluptatibus labore temporibus
                    nam optio quam dignissimos? Doloribus accusantium impedit
                    nisi perspiciatis maxime voluptatum sapiente nesciunt aut
                    quos quo.
                  </p>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">
                  <h3>1 Januari 2025</h3>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt, laborum? Nesciunt, voluptatibus labore temporibus
                    nam optio quam dignissimos? Doloribus accusantium impedit
                    nisi perspiciatis maxime voluptatum sapiente nesciunt aut
                    quos quo.
                  </p>
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
                <a href="">Monument</a>
                <a href="">About Us</a>
                <a href="">FAQ</a>
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

export default Timelines;
