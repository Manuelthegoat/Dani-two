import React, { useState } from 'react';
import Art1 from "../../Assets/art-1.jpg";
import Art2 from "../../Assets/art-2.jpg";
import Art3 from "../../Assets/art-3.jpg";
import Art4 from "../../Assets/art-5.jpg";
import Art5 from "../../Assets/art-4.jpg";
import './CTA.css';

const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [hasMotion, setHasMotion] = useState(null);
  const [needsHelp, setNeedsHelp] = useState(null);
  const [budgetRange, setBudgetRange] = useState([200, 500]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

 const styles = [
    { id: 1, name: 'Realistic', image: Art1 },
    { id: 2, name: 'Best Seller', image: Art2 },
    { id: 3, name: 'Playful', image: Art3 },
  ];

  const motionOptions = [
    { id: 1, name: 'With Motion', image: Art4 },
    { id: 2, name: 'Regular Cover', image: Art5 }
  ];

  const helpOptions = [
    { id: 1, name: 'Yes I need Help' },
    { id: 2, name: 'No I already have an idea' }
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleBudgetChange = (e, index) => {
    const value = parseInt(e.target.value);
    const newBudget = [...budgetRange];
    
    if (index === 0 && value > budgetRange[1]) return;
    if (index === 1 && value < budgetRange[0]) return;
    
    newBudget[index] = value;
    setBudgetRange(newBudget);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }
    setIsSubmitted(true);
    setError('');
  };

  const progressPercentage = (currentStep / 5) * 100;

  return (
    <>
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to create<br /> <span className="highlight">Together?</span>
          </h2>
          <button className="cta-button" onClick={() => setIsOpen(true)}>
            Start a Project
          </button>
        </div>
      </section>

      {isOpen && (
        <div className={`popup-overlay ${isOpen ? 'fade-in' : ''}`}>
          <div className="popup-content">
            <button className="close-btn" onClick={() => {
              setIsOpen(false);
              setCurrentStep(1);
              setIsSubmitted(false);
            }}>×</button>

            {!isSubmitted ? (
              <>
                <div className="step-content">
                  {currentStep === 1 && (
                    <>
                      <h3>What style do you like the most?</h3>
                      <p>Each art style has its own price. Choose the one that fits your budget and taste.</p>
                      <div className="option-cards">
                        {styles.map(style => (
                          <div 
                            key={style.id}
                            className={`option-card ${selectedStyle === style.id ? 'selected' : ''}`}
                            onClick={() => setSelectedStyle(style.id)}
                          >
                            <div className="card-image-container">
                              <img src={style.image} alt={style.name} />
                            </div>
                            <div className="card-footer">
                              <p>{style.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <h3>Do you need a motion animation for your cover art?</h3>
                      <p>A motion cover is better suited to promote the release on social networks like Instagram.</p>
                      <div className="option-cards">
                        {motionOptions.map(option => (
                          <div
                            key={option.id}
                            className={`option-card ${hasMotion === (option.id === 1) ? 'selected' : ''}`}
                            onClick={() => setHasMotion(option.id === 1)}
                          >
                            <div className="card-image-container">
                              <img src={option.image} alt={option.name} />
                            </div>
                            <div className="card-footer">
                              <p>{option.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <h3>Do you need help developing a cover idea? It's free!</h3>
                      <p>If you need advice or help in creating an idea, art direction will be done with you completely free of charge.</p>
                      <div className="option-cards">
                        {helpOptions.map(option => (
                          <div
                            key={option.id}
                            className={`option-card ${needsHelp === (option.id === 1) ? 'selected' : ''}`}
                            onClick={() => setNeedsHelp(option.id === 1)}
                          >
                           
                            <div className="card-footer">
                              <p>{option.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="skip-text" onClick={handleNext}>Skip this step</p>
                    </>
                  )}

                  {currentStep === 4 && (
                    <>
                      <h3>Specify your budget in USD</h3>
                      <p>We will offer you several cover art options to choose from.</p>
                      <div className="budget-container">
                        <div className="budget-inputs">
                          <div className="input-group">
                            <span>$</span>
                            <input 
                              type="number" 
                              value={budgetRange[0]} 
                              onChange={(e) => handleBudgetChange(e, 0)} 
                              min="200" 
                              max="1000"
                            />
                          </div>
                          <span className="dash">—</span>
                          <div className="input-group">
                            <span>$</span>
                            <input 
                              type="number" 
                              value={budgetRange[1]} 
                              onChange={(e) => handleBudgetChange(e, 1)} 
                              min="200" 
                              max="1000"
                            />
                          </div>
                        </div>
                        <div className="range-slider">
                          <input
                            type="range"
                            min="200"
                            max="1000"
                            value={budgetRange[0]}
                            onChange={(e) => handleBudgetChange(e, 0)}
                            className="range-thumb range-thumb--left"
                          />
                          <input
                            type="range"
                            min="200"
                            max="1000"
                            value={budgetRange[1]}
                            onChange={(e) => handleBudgetChange(e, 1)}
                            className="range-thumb range-thumb--right"
                          />
                          <div className="slider">
                            <div className="slider-track"></div>
                            <div 
                              className="slider-range" 
                              style={{
                                left: `${((budgetRange[0] - 200) / 800) * 100}%`,
                                right: `${100 - ((budgetRange[1] - 200) / 800) * 100}%`
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="budget-labels">
                          <span>$200</span>
                          <span>$1000</span>
                        </div>
                      </div>
                    </>
                  )}

                  {currentStep === 5 && (
                    <>
                      <h3>Enter your Information</h3>
                      <p>A personal offer and the confirmed price list would be sent to your email.</p>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="submit-btn">Get Prices</button>
                      </form>
                    </>
                  )}
                </div>

                <div className="navigation-container">
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                  <div className="navigation-buttons">
                    {currentStep > 1 && (
                      <button className="nav-btn prev-btn" onClick={handlePrev}>
                        ←
                      </button>
                    )}
                    {currentStep < 5 && (
                      <button 
                        className="nav-btn next-btn" 
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && !selectedStyle) || 
                          (currentStep === 2 && hasMotion === null) ||
                          (currentStep === 3 && needsHelp === null)
                        }
                      >
                        Next →
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>We've received your information and will contact you shortly with your personalized offer.</p>
                <button 
                  className="close-success-btn" 
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentStep(1);
                    setIsSubmitted(false);
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;