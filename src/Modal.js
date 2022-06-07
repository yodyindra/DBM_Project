import "./styles.css";
import React, { useState } from "react";

const Modal = (props) => {
  const [showTermCondition, setShowTermCondition] = useState(false);
  return (
    <div
      className={props.show ? "modal d-block" : "modal d-none"}
      tabindex="-1"
      id="buyConfirm"
    >
      {showTermCondition ? (
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div
            className="modal-content"
            style={{ border: "none", borderRadius: "14px" }}
          >
            <div className="modal-body">
              <div className="p-4">
                <h1>Syarat dan Ketentuan</h1>
                <h5 style={{ color: "#F55330" }}>Dblockchain Monument</h5>
                <div className="text-justify modal-content-scrollable">
                  <p>Welcome to Dblockchain Monument!</p>
                  <p>
                    These terms and conditions outline the rules and regulations
                    for the use of Dblockchain Monument's Website, located at
                    dbm.com.
                  </p>
                  <p>
                    By accessing this website we assume you accept these terms
                    and conditions. Do not continue to use Dblockchain Monument
                    if you do not agree to take all of the terms and conditions
                    stated on this page.
                  </p>
                  <p>
                    The following terminology applies to these Terms and
                    Conditions, Privacy Statement and Disclaimer Notice and all
                    Agreements: "Client", "You" and "Your" refers to you, the
                    person log on this website and compliant to the Company’s
                    terms and conditions. "The Company", "Ourselves", "We",
                    "Our" and "Us", refers to our Company. "Party", "Parties",
                    or "Us", refers to both the Client and ourselves. All terms
                    refer to the offer, acceptance and consideration of payment
                    necessary to undertake the process of our assistance to the
                    Client in the most appropriate manner for the express
                    purpose of meeting the Client’s needs in respect of
                    provision of the Company’s stated services, in accordance
                    with and subject to, prevailing law of Netherlands. Any use
                    of the above terminology or other words in the singular,
                    plural, capitalization and/or he/she or they, are taken as
                    interchangeable and therefore as referring to same.
                  </p>
                  <p>
                    The following terminology applies to these Terms and
                    Conditions, Privacy Statement and Disclaimer Notice and all
                    Agreements: "Client", "You" and "Your" refers to you, the
                    person log on this website and compliant to the Company’s
                    terms and conditions. "The Company", "Ourselves", "We",
                    "Our" and "Us", refers to our Company. "Party", "Parties",
                    or "Us", refers to both the Client and ourselves. All terms
                    refer to the offer, acceptance and consideration of payment
                    necessary to undertake the process of our assistance to the
                    Client in the most appropriate manner for the express
                    purpose of meeting the Client’s needs in respect of
                    provision of the Company’s stated services, in accordance
                    with and subject to, prevailing law of Netherlands. Any use
                    of the above terminology or other words in the singular,
                    plural, capitalization and/or he/she or they, are taken as
                    interchangeable and therefore as referring to same.
                  </p>
                  <p>
                    The following terminology applies to these Terms and
                    Conditions, Privacy Statement and Disclaimer Notice and all
                    Agreements: "Client", "You" and "Your" refers to you, the
                    person log on this website and compliant to the Company’s
                    terms and conditions. "The Company", "Ourselves", "We",
                    "Our" and "Us", refers to our Company. "Party", "Parties",
                    or "Us", refers to both the Client and ourselves. All terms
                    refer to the offer, acceptance and consideration of payment
                    necessary to undertake the process of our assistance to the
                    Client in the most appropriate manner for the express
                    purpose of meeting the Client’s needs in respect of
                    provision of the Company’s stated services, in accordance
                    with and subject to, prevailing law of Netherlands. Any use
                    of the above terminology or other words in the singular,
                    plural, capitalization and/or he/she or they, are taken as
                    interchangeable and therefore as referring to same.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-sm-12 d-flex flex-row justify-content-between mb-3">
                <button
                  onClick={() => {
                    props.onClose();
                    setShowTermCondition(false);
                  }}
                  type="button"
                  className="btn btn-secondary col-sm-2"
                  style={{
                    background: "#DADADA",
                    borderRadius: "51px",
                    border: "none",
                    color: "#292D32"
                  }}
                  data-dismiss="modal"
                >
                  Kembali
                </button>
                <button
                  type="button"
                  className="btn col-sm-2"
                  style={{
                    background:
                      "linear-gradient(99.39deg, #02006B -58.16%, #F55330 106.9%)",
                    borderRadius: "51px",
                    border: "none",
                    color: "#ffffff"
                  }}
                >
                  Yakin
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{ border: "none", borderRadius: "14px" }}
          >
            <div className="modal-body">
              <h5 className="p-4" style={{ color: "#F55330" }}>
                Apakah anda yakin untuk membeli NFT dari{" "}
                <b>Sita Kepandung Monument</b>?
              </h5>
              <div className="col-sm-12 d-flex flex-row justify-content-around mb-3">
                <button
                  onClick={props.onClose}
                  type="button"
                  className="btn btn-secondary col-sm-5"
                  style={{
                    background: "#DADADA",
                    borderRadius: "51px",
                    border: "none",
                    color: "#292D32"
                  }}
                  data-dismiss="modal"
                >
                  Kembali
                </button>
                <button
                  type="button"
                  onClick={() => setShowTermCondition(true)}
                  className="btn col-sm-5"
                  style={{
                    background:
                      "linear-gradient(99.39deg, #02006B -58.16%, #F55330 106.9%)",
                    borderRadius: "51px",
                    border: "none",
                    color: "#ffffff"
                  }}
                >
                  Yakin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
