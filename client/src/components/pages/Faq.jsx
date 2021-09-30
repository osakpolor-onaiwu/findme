import { useState, useEffect } from "react";
import { Plus } from "react-feather";
import { connect } from "react-redux";

const Faq = ({ Faqs }) => {
  const initialState = {
    show: false,
  };
  const [state, setstate] = useState(initialState);

  const handleClick = (e) => {
    setstate({
      ...state,
      show: !state.show,
    });

    const answer = e.target.nextElementSibling;

    if (state.show) {
      answer.className = "hide";
    } else {
      answer.className = "show";
    }
  };

  const allFaqs = Faqs.length ? (
    Faqs.map((item) => {
      return (
        <div className="contain" key={item.id}>
          <h6 onClick={handleClick} className="question">
            <Plus color="white" className="add-icon" size="12" />
            {item.question}
          </h6>
          <p className="hide">{item.answer}</p>
        </div>
      );
    })
  ) : (
    <div>No Faq for now</div>
  );

  return (
    <main className="faq ">
      <div id="faqs">
        <h5>Frequently asked questions</h5>
      </div>
      {allFaqs}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    Faqs: state.Faq.faq,
  };
};

export default connect(mapStateToProps)(Faq);
