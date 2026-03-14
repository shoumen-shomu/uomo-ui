import FaqList from "../component/faq/FaqList";
import faqData from "../component/faq/faqData";

const PAGE_HEADING = "FREQUENTLY ASKED QUESTIONS";

const Faq = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[930px] mx-auto px-6 py-14">

        {/* Heading — কোনো border নেই */}
        <h1 className="text-[28px] font-bold text-gray-900 tracking-wide mb-12">
          {PAGE_HEADING}
        </h1>
        {/* ↑ mb-12 = 48px gap heading থেকে Orders পর্যন্ত */}

        {/* FAQ Sections */}
        <FaqList faqs={faqData} />

      </div>
    </div>
  );
};

export default Faq;