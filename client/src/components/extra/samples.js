import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const Samples = ({ samples }) => {
  // gallary for samples
  const samplesGallary = () => {
    const shuffle = (array) => {
      let i = array.length,
        random = 0,
        temp;

      while (i--) {
        random = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[random];
        array[random] = temp;
      }

      return array;
    };
    const newSamplesArray = shuffle(samples);
    const first6 = newSamplesArray.slice(0, 6);
    return samples.length ? (
      first6.map((item) => {
        return (
          <div key={item._id} className="col s6 m4 l4">
            <NavLink to={`/manufacturer/${item.name}`}>
              <div className="card-box white center">
                <img
                  className="sample-image center"
                  src={item.image}
                  alt="sample image"
                />
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
    <main id="sample" className="contain">
      <h6 className="center home-sample-related-text">
        SAMPLES FROM OUR SERVICE PROVIDERS
      </h6>
      {samplesGallary()}
    </main>
  );
};

const mapStateToProps = (state) => ({
  samples: state.manufacturers.samples,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Samples);
