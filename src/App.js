import * as React from "react";

function App(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&"
            className="img"
          />
          <div className="div-3">Get an Estimate for Workspace</div>
          <div className="div-4">Post Your Requirements</div>
          <div className="div-5">
            Please fill the form below to receive a quote for workspace. Please
            add all the details required.
          </div>
          <div className="div-6">
            <div className="div-7">Contact details</div>
            <div className="div-8">
              Please fill your information so we can get in touch with you.
            </div>
            <div className="div-9" />
            <div className="div-10">Name</div>
            <div className="div-11">Your Name</div>
            <div className="div-12">Phone Number</div>
            <div className="div-13">(123) 456 - 7890</div>
            <div className="div-14">Email </div>
            <div className="div-15">Your Mail ID</div>
            <div className="div-16">Date</div>
            <div className="div-17"> dd - mm - yyyy</div>
          </div>
          <div className="div-18">Next </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: var(--Neutral-100, #fff);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-2 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 1600px;
          width: 100%;
          padding: 50px 80px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-3 {
          position: relative;
          color: var(--Neutral-800, #170f49);
          font-feature-settings: "clig" off, "liga" off;
          white-space: nowrap;
          border-radius: 18px;
          box-shadow: 0px 12px 24px 0px rgba(20, 20, 43, 0.04),
            0px -2px 4px 0px rgba(20, 20, 43, 0.02),
            0px 3px 14px 0px rgba(74, 58, 255, 0.03);
          background-color: var(--Neutral-100, #fff);
          align-self: stretch;
          justify-content: center;
          align-items: center;
          margin: 0 19px;
          padding: 43px 60px;
          font: 700 24px/146% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
            max-width: 100%;
            margin-right: 10px;
            padding: 0 20px;
          }
        }
        .div-4 {
          position: relative;
          color: var(--Neutral-800, #170f49);
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          align-self: center;
          margin-top: 121px;
          font: 700 34px/135% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            margin-top: 40px;
          }
        }
        .div-5 {
          position: relative;
          color: #6f6c90;
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          align-self: center;
          margin-top: 24px;
          max-width: 497px;
          font: 500 18px/30px DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
          }
        }
        .div-6 {
          position: relative;
          border-radius: 34px;
          border: 1px solid #eff0f6;
          box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
          background-color: #faf8f8;
          align-self: center;
          display: flex;
          margin-top: 58px;
          width: 700px;
          max-width: 100%;
          flex-direction: column;
          padding: 42px 58px 42px 46px;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-7 {
          color: var(--Neutral-800, #170f49);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          margin-left: 18px;
          white-space: nowrap;
          font: 700 24px/146% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .div-8 {
          color: #6f6c90;
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          margin: 23px 0 0 18px;
          font: 500 18px/167% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
          }
        }
        .div-9 {
          background-color: #d9dbe9;
          align-self: stretch;
          margin-top: 20px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
          }
        }
        .div-10 {
          color: var(--Neutral-800, #170f49);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          white-space: nowrap;
          margin: 51px 0 0 18px;
          font: 500 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
            margin: 40px 0 0 10px;
          }
        }
        .div-11 {
          color: var(--Neutral-600, #6f6c90);
          white-space: nowrap;
          border-radius: 46px;
          border: 1px solid var(--Neutral-300, #eff0f6);
          box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
          background-color: var(--Neutral-100, #fff);
          align-self: start;
          width: 284px;
          max-width: 100%;
          justify-content: center;
          align-items: start;
          margin: 22px 0 0 18px;
          padding: 27px 60px 27px 20px;
          font: 400 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            white-space: initial;
            margin-left: 10px;
            padding-right: 20px;
          }
        }
        .div-12 {
          color: var(--Neutral-800, #170f49);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          white-space: nowrap;
          margin: 51px 0 0 18px;
          font: 500 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
            margin: 40px 0 0 10px;
          }
        }
        .div-13 {
          color: var(--Neutral-600, #6f6c90);
          white-space: nowrap;
          border-radius: 46px;
          border: 1px solid var(--Neutral-300, #eff0f6);
          box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
          background-color: var(--Neutral-100, #fff);
          align-self: start;
          width: 284px;
          max-width: 100%;
          justify-content: center;
          align-items: start;
          margin: 21px 0 0 18px;
          padding: 25px 60px 25px 21px;
          font: 400 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
            margin-left: 10px;
            padding: 0 20px;
          }
        }
        .div-14 {
          color: var(--Neutral-800, #170f49);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          white-space: nowrap;
          margin: 51px 0 0 18px;
          font: 500 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
            margin: 40px 0 0 10px;
          }
        }
        .div-15 {
          color: var(--Neutral-600, #6f6c90);
          white-space: nowrap;
          border-radius: 46px;
          border: 1px solid var(--Neutral-300, #eff0f6);
          box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
          background-color: var(--Neutral-100, #fff);
          align-self: start;
          width: 284px;
          max-width: 100%;
          justify-content: center;
          align-items: start;
          margin: 22px 0 0 18px;
          padding: 27px 60px 27px 20px;
          font: 400 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
            margin-left: 10px;
            padding-right: 20px;
          }
        }
        .div-16 {
          color: var(--Neutral-800, #170f49);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          white-space: nowrap;
          margin: 51px 0 0 18px;
          font: 500 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
            margin: 40px 0 0 10px;
          }
        }
        .div-17 {
          color: var(--Neutral-600, #6f6c90);
          white-space: nowrap;
          border-radius: 46px;
          border: 1px solid var(--Neutral-300, #eff0f6);
          box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
          background-color: var(--Neutral-100, #fff);
          align-self: start;
          width: 284px;
          max-width: 100%;
          justify-content: center;
          align-items: start;
          margin: 21px 0 41px 18px;
          padding: 25px 60px 25px 21px;
          font: 400 18px/111% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            white-space: initial;
            margin: 0 0 40px 10px;
            padding: 0 20px;
          }
        }
        .div-18 {
          position: relative;
          color: #fff;
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          white-space: nowrap;
          justify-content: center;
          border-radius: 56px;
          background: linear-gradient(180deg, #9e96f2 0%, #ec31f0 100%);
          box-shadow: 0px 3px 12px 0px rgba(74, 58, 255, 0.18);
          align-self: center;
          margin: 48px 0 145px;
          padding: 21px 40px;
          font: 700 24px/83% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
            margin: 40px 0;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default App;