import React from 'react';
import { beforeAfterHome } from '../data/products';

const ProblemSolutions = ({ onNavigate }) => {
  
  const handleCardClick = (id) => {
    const slugMap = {
      'ba1': 'wall-mounted-toothpaste-dispenser',
      'ba2': 'uv-toothbrush-holder-sterilizer',
      'ba3': 'kitchen-sink-organizer-rack',
      'ba4': 'foldable-clothes-drying-rack'
    };
    if (slugMap[id]) {
      onNavigate('product', slugMap[id]);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section id="problems-solutions" style={{ padding: '16px 0', backgroundColor: 'white' }} className="problems-section-padding">
      <div className="container problems-container">

        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }} className="title-bar-padding">
          <h2 className="problems-section-title" style={{ color: 'var(--text-dark)', margin: 0 }}>
            Everyday Problems, Smart Solutions
          </h2>
          <a href="#best-sellers" className="problems-link-font">View All</a>
        </div>

        {/* Scroll row / Desktop Grid */}
        <div className="scroll-row problems-layout-row">
          {beforeAfterHome.map((card) => (
            <div 
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="card problems-card-item"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0
              }}
            >
              {/* Problem label */}
              <h3 className="problems-label-font" style={{ 
                fontWeight: '800', 
                color: 'var(--text-dark)', 
                margin: 0, 
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.2
              }}>
                🚨 {card.title}
              </h3>

              {/* Dual image block */}
              <div className="problems-images-block" style={{
                display: 'flex',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {/* Before */}
                <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden' }} className="problems-img-box">
                  <img 
                    src={card.image} 
                    alt="Before" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} 
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '2px',
                    backgroundColor: 'rgba(239, 68, 68, 0.95)',
                    color: 'white',
                    fontSize: '7px',
                    fontWeight: '800',
                    padding: '1px 3px',
                    borderRadius: '2px'
                  }}>BEFORE</span>
                </div>

                {/* After */}
                <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden' }} className="problems-img-box">
                  <img 
                    src={card.image} 
                    alt="After" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '2px',
                    backgroundColor: 'rgba(22, 163, 74, 0.95)',
                    color: 'white',
                    fontSize: '7px',
                    fontWeight: '800',
                    padding: '1px 3px',
                    borderRadius: '2px'
                  }}>AFTER</span>
                </div>
              </div>

              {/* Result text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span className="problems-result-font" style={{ fontWeight: '800', color: 'var(--success)', lineHeight: 1.2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  ✅ {card.result}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .problems-container {
          padding: 0;
        }
        .title-bar-padding {
          padding: 0 16px;
        }
        .problems-section-title {
          font-size: 15px !important;
        }
        .problems-link-font {
          font-size: 11px !important;
        }
        .problems-layout-row {
          display: flex; 
          gap: 10px; 
          padding: 4px 16px 12px 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .problems-card-item {
          width: 160px;
          padding: 10px;
          border-radius: 12px;
          gap: 8px;
          scroll-snap-align: start;
        }
        .problems-label-font {
          font-size: 11px !important;
          min-height: 28px;
          -webkit-line-clamp: 2;
        }
        .problems-images-block {
          gap: 4px;
        }
        .problems-img-box {
          width: 70px;
          height: 80px;
        }
        .problems-result-font {
          font-size: 11px !important;
          -webkit-line-clamp: 2;
          height: 26px;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .problems-section-padding {
            padding: 36px 0 !important;
          }
          .problems-container {
            padding: 0 16px !important;
          }
          .problems-section-title {
            font-size: 24px !important;
          }
          .problems-link-font {
            font-size: 14px !important;
          }
          .problems-layout-row {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
          }
          .problems-card-item {
            width: 100% !important;
            padding: 16px !important;
            border-radius: 20px !important;
            gap: 12px !important;
          }
          .problems-label-font {
            font-size: 16px !important;
            min-height: 40px !important;
            -webkit-line-clamp: 2 !important;
          }
          .problems-images-block {
            gap: 8px !important;
          }
          .problems-img-box {
            width: 50% !important;
            height: 140px !important;
          }
          .problems-result-font {
            font-size: 14px !important;
            -webkit-line-clamp: 1 !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSolutions;
