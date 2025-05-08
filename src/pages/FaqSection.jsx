import React from 'react';

const FaqSection = () => {

    const faqData = [
        {
          question: "What is a subscription box?",
          answer: "A subscription box is a recurring delivery of niche products packaged as an experience and designed to offer customers additional value."
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, you can cancel your subscription at any time from your account settings."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Currently, we only ship within the United States. International shipping is coming soon."
        },
        {
          question: "How do I track my box?",
          answer: "Once your box is shipped, you'll receive a tracking number via email to follow its delivery status."
        },
        {
          question: "Can I choose the products in my box?",
          answer: "Some of our boxes are personalized based on your preferences, while others come with a surprise mix of items."
        },
        {
          question: "Is there a refund policy?",
          answer: "We do not offer refunds for shipped boxes, but you can contact support for issues with your order."
        },
        {
          question: "When will I be billed?",
          answer: "Billing occurs on the same date every month based on your subscription start date."
        }
      ];



    return (
        <div className='container mx-auto'>
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className=''>
                {
                    faqData.map((item,index) => (

                        <div key={index} className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">{item.question}</div>
                        <div className="collapse-content text-sm">{item.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FaqSection;