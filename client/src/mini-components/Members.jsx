import React from "react";

const Members = ({ donors }) => {
  return (
    <section className="members">
      <div className="container">
       <div className="header_section">
          <h2 className="heading" style={{fontSize: "100px",}}>Recent Donations</h2>
          <p style={{fontSize: "37px"}}>These are the list of recent donations</p>
       </div>
       <div className="members_container">
        {donors.map((donor)=>(
          <div className="card" key={donor.id}>
            <img src={donor.image} alt={donor.title} />
            <h3>{donor.title}</h3>
            <h4 style={{color:"green"}}>{donor.amount}</h4>
          </div>
        ))}
       </div>
      </div>
    </section>
  );
};

export default Members;
