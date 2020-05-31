import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import Step from './Step';
import StepButton from './StepButton';

export default function Stepper(props) {


    const { onComplete,finishButtonText, nextButtonText, backButtonText, steps, disabledSteps,
        activeColor, completeColor, defaultColor, circleFontColor,
        activeTitleColor, completeTitleColor, defaultTitleColor,
        size, circleFontSize, titleFontSize,
        circleTop, titleTop, completeOpacity, activeOpacity, defaultOpacity,
        completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle,
        defaultBorderColor, completeBorderColor, activeBorderColor, defaultBorderStyle,
        completeBorderStyle, activeBorderStyle, defaultBarColor, completeBarColor, lineMarginOffset, defaultBorderWidth } = props;
    const [currentStep, setCurrentStep] = useState(0)

    const styles = {
        root: {
            width: '100%',
            minHeight: 0,
            padding: 0,
        },
        stepper: {
            display: 'table',
            width: '100%',
            margin: '0 auto',
        },
    };

    function onNextClick() {
        setCurrentStep(currentStep + 1);
    }

    function onBackClick() {
        setCurrentStep(currentStep - 1);
    }

    const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };
    return (
        <div>
            <div style={styles.root}>
                <div style={styles.stepper}>
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            width={100 / steps.length}
                            title={step.title}
                            icon={step.icon}
                            href={step.href}
                            onClick={step.onClick}
                            render={step.rend}
                            active={!(disabledSteps || []).includes(index) && index === currentStep}
                            completed={!(disabledSteps || []).includes(index) && index < currentStep}
                            first={index === 0}
                            isLast={index === steps.length - 1}
                            index={index}
                            activeColor={activeColor}
                            completeColor={completeColor}
                            defaultColor={defaultColor}
                            circleFontColor={circleFontColor}
                            activeTitleColor={activeTitleColor}
                            completeTitleColor={completeTitleColor}
                            defaultTitleColor={defaultTitleColor}
                            size={size}
                            circleFontSize={circleFontSize}
                            titleFontSize={titleFontSize}
                            circleTop={circleTop}
                            titleTop={titleTop}
                            defaultOpacity={defaultOpacity}
                            completeOpacity={completeOpacity}
                            activeOpacity={activeOpacity}
                            defaultTitleOpacity={defaultTitleOpacity}
                            completeTitleOpacity={completeTitleOpacity}
                            activeTitleOpacity={activeTitleOpacity}
                            barStyle={barStyle}
                            defaultBorderColor={defaultBorderColor}
                            completeBorderColor={completeBorderColor}
                            activeBorderColor={activeBorderColor}
                            defaultBorderStyle={defaultBorderStyle}
                            defaultBorderWidth={defaultBorderWidth}
                            completeBorderStyle={completeBorderStyle}
                            activeBorderStyle={activeBorderStyle}
                            defaultBarColor={defaultBarColor}
                            completeBarColor={completeBarColor}
                            lineMarginOffset={lineMarginOffset}
                        />

                    ))}

                </div>
            </div>
            {steps[currentStep].render()}
            <StepButton activeStep={currentStep}
                nextClick={onNextClick}
                backClick={onBackClick}
                steps={steps}
                finishButtonText={finishButtonText}
                nextButtonText={nextButtonText}
                backButtonText={backButtonText}
                onComplete={onComplete}
            />
        </div>

    );
}
Stepper.defaultProps = {
    finishButtonText: 'Finish',
    nextButtonText: 'Next',
    backButtonText: 'Back'
};

Stepper.propTypes = {
    steps: PropTypes.array,
    activeColor: PropTypes.string,
    completeColor: PropTypes.string,
    defaultColor: PropTypes.string,
    activeTitleColor: PropTypes.string,
    completeTitleColor: PropTypes.string,
    defaultTitleColor: PropTypes.string,
    circleFontColor: PropTypes.string,
    size: PropTypes.number,
    circleFontSize: PropTypes.number,
    titleFontSize: PropTypes.number,
    circleTop: PropTypes.number,
    titleTop: PropTypes.number,
    defaultOpacity: PropTypes.string,
    completeOpacity: PropTypes.string,
    activeOpacity: PropTypes.string,
    defaultTitleOpacity: PropTypes.string,
    completeTitleOpacity: PropTypes.string,
    activeTitleOpacity: PropTypes.string,
    barStyle: PropTypes.string,
    defaultBarColor: PropTypes.string,
    completeBarColor: PropTypes.string,
    defaultBorderColor: PropTypes.string,
    completeBorderColor: PropTypes.string,
    activeBorderColor: PropTypes.string,
    defaultBorderStyle: PropTypes.string,
    completeBorderStyle: PropTypes.string,
    activeBorderStyle: PropTypes.string,
    lineMarginOffset: PropTypes.number,
    defaultBorderWidth: PropTypes.number,
    finishButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,
    backButtonText: PropTypes.string,
    onComplete:PropTypes.func
};
