import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const Categories = ({ category }) => {
  // gallary for categories
  const categoriesgallary = () => {
    return category.length ? (
      category.map((categoryItem) => {
        return (
          <div key={categoryItem._id} className="col s6 m4 l4">
            <NavLink to={`/category/${categoryItem.name}`}>
              <div className="card-box white center">
                <img
                  className="category-image center"
                  src={categoryItem.image}
                  alt="category image"
                />
                <h6 className="card-text white-text center">
                  {categoryItem.name}
                </h6>
                <div></div>
              </div>
            </NavLink>
          </div>
        );
      })
    ) : (
      <div>
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main id="category" className="">
      <h6 className="center home-category-related-text">CATEGORIES</h6>
      {categoriesgallary()}
    </main>
  );
};

const mapStateToProps = (state) => ({
  category: state.category.category,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
