
import "./styles.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open " : "") }
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question cor">{faq.question}</div>
      <div className="faq-answer dm">{faq.answer}</div>
    </div>
  );
};

export default FAQ;