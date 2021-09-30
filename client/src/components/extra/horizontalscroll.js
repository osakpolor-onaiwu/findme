// import React from "react";
// import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";

// const HorinzontalScroll = ({ samples }) => {
//   const items = samples ? (
//     samples.map((item) => {
//       return (
//         <NavLink to={`/category/${item.name}`} key={item.id}>
//           <img
//             className="scroll-image center item"
//             src={item.image}
//             alt="scroll image"
//           />

//           <h6 className="center scroll-text">{item.name}</h6>
//         </NavLink>
//       );
//     })
//   ) : (
//     <div>
//       <div className="preloader-wrapper active">
//         <div className="spinner-layer spinner-red-only">
//           <div className="circle-clipper left">
//             <div className="circle"></div>
//           </div>
//           <div className="gap-patch">
//             <div className="circle"></div>
//           </div>
//           <div className="circle-clipper right">
//             <div className="circle"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <main>
//       <section className="hide-on-med-and-down">
//         <OwlCarousel
//           items="5"
//           margin={10}
//           className="owl-theme"
//           dots
//           autoPlay={true}
//           loop
//         >
//           {items}
//         </OwlCarousel>
//       </section>
//       <section className="hide-on-large-only">
//         <OwlCarousel
//           items="4"
//           margin={10}
//           className="owl-theme"
//           dots
//           autoPlay={true}
//           loop
//         >
//           {items}
//         </OwlCarousel>
//       </section>
//     </main>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     samples: state.manufacturers.samples,
//     // category: state.category.category,
//   };
// };
// export default connect(mapStateToProps)(HorinzontalScroll);
