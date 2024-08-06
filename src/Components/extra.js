import React from "react";

export default function Extra() {
  const data = [
    { name: "Goals", image: "images/Goals.png" },
    { name: "PopularDish", image: "images/PopularDish.png" },
    { name: "Menus", image: "images/Menus.png", },
  ];

  return (
    <React.Fragment>
      <div className="extra-activity " >
        {data.map((item) => {
          return (
            <>
              <div className="row my-1" style={{ alignItems: 'center', }}>
                <div className="col-2 col-md-3">
                  <img src={item.image} className="img-box" />
                </div>
                <div className="col-6 col-md-6">
                  {item.name}
                </div>
                <div className="col-4 col-sm-3">
                  <img src="images/arrow.png" className="img-box2" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
}
