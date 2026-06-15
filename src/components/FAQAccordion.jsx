import React, { useState } from 'react';
import { homeFaqs } from '../data/products';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq-section" style={{ padding: '24px 0', backgroundColor: 'white' }} className="faq-section-padding">
      <div className="container faq-container" style={{ maxWidth: '800px' }}>
        
        {/* Title */}
        <h2 className="faq-section-title" style={{ textAlign: 'center', color: 'var(--text-dark)' }}>
          Frequently Asked Questions
        </h2>

        {/* Accordions */}
        <div style={{ display: 'flex', flexDirection: 'column' }} className="faq-list-gap">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`faq-item-box ${isOpen ? 'open' : ''}`}
                style={{
                  overflow: 'hidden',
                  backgroundColor: 'white'
                }}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="faq-trigger-btn"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-arrow-icon" style={{
                    fontWeight: 'bold',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: 'var(--accent)',
                    flexShrink: 0
                  }}>
                    ▼
                  </span>
                </button>

                {/* Collapsible Panel */}
                <div 
                  className="faq-collapse-panel"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.25s ease-out'
                  }}
                >
                  <p style={{
                    color: 'var(--text-main)',
                    lineHeight: '1.45',
                    margin: 0
                  }} className="faq-answer-text">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .faq-section-title {
          font-size: 15px !important;
          margin-bottom: 16px;
        }
        .faq-list-gap {
          gap: 0px;
        }
        .faq-item-box {
          border-bottom: 1px solid var(--border);
          box-shadow: none;
        }
        .faq-trigger-btn {
          padding: 14px 16px;
        }
        .faq-question-text {
          font-size: 13px !important;
        }
        .faq-arrow-icon {
          font-size: 16px;
        }
        .faq-collapse-panel {
          padding: 0 16px;
        }
        .faq-answer-text {
          font-size: 12px;
          padding-bottom: 14px;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .faq-section-padding {
            padding: 48px 0 !important;
          }
          .faq-section-title {
            font-size: 24px !important;
            margin-bottom: 28px !important;
          }
          .faq-list-gap {
            gap: 12px !important;
          }
          .faq-item-box {
            border: 1px solid var(--border) !important;
            border-radius: 16px !important;
            transition: background-color 0.2s ease, box-shadow 0.2s ease !important;
          }
          .faq-item-box.open {
            background-color: var(--bg) !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02) !important;
          }
          .faq-trigger-btn {
            padding: 18px 20px !important;
          }
          .faq-question-text {
            font-size: 15px !important;
          }
          .faq-arrow-icon {
            font-size: 18px !important;
          }
          .faq-collapse-panel {
            padding: 0 20px !important;
          }
          .faq-answer-text {
            font-size: 14px !important;
            padding-bottom: 20px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQAccordion;
