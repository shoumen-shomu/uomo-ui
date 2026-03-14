import FaqItem from "./FaqItem";

const FaqList = ({ faqs }) => {
  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq) => (
        <FaqItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FaqList;