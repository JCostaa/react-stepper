import React from 'react';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
export default function StepButton(props) {

  const { activeStep,
     nextClick,
     backClick, 
     steps,
     finishButtonText,
     nextButtonText,
     backButtonText,
     onComplete } = props


  return (
    <>
      {activeStep === steps.length - 1
        ? <Button className="float-right" variant="primary" size="lg" onClick={onComplete} active>
          {finishButtonText }
    </Button>
        :
        <Button className="float-right" variant="primary" size="lg" onClick={nextClick} active>
         {nextButtonText }
      </Button>
      }
      {activeStep > 0 ?
        <Button className="float-left" variant="secondary" size="lg" onClick={backClick} active>
            {backButtonText}
        </Button>
        :
        null
      }

    </>
  );
}

StepButton.propTypes = {
  activeStep: PropTypes.number,
  nextClick: PropTypes.func,
  backClick: PropTypes.func,
  finishButtonText:PropTypes.string,
  nextButtonText:PropTypes.string,
  backButtonText:PropTypes.string,
  onComplete:PropTypes.func

};