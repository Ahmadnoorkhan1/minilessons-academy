import React, { FC, useState } from "react";

type StepperProps = {
  currentStep: number;
};

const Stepper: FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { label: "Give A Topic", icon: true },
    { label: "Select Title", icon: true },
    { label: "Outline", icon: true },
    { label: "Summary", icon: true },
    { label: "Pro Course", icon: true },
  ];

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex md:w-full items-center ${
            index == currentStep ? "text-primary dark:text-primary" : ""
          } ${index !== steps.length - 1 ? "sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : ""}`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {step.icon ? (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
              <span className="me-2">{index + 1}</span>
            )}
            {step.label}
          </span>
        </li>
      ))}
    </ol>
  );
};

const CourseForm: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <div>Form 1: Enter a Topic</div>;
      case 1:
        return <div>Form 2: Select a Title</div>;
      case 2:
        return <div>Form 3: Outline</div>;
      case 3:
        return <div>Form 4: Summary</div>;
      case 4:
        return <div>Form 5: Pro Course</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <Stepper currentStep={currentStep} />
      <div className="mt-4">{renderForm()}</div>
      <div className="mt-4">
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep((prev) => prev - 1)}>Back</button>
        )}
        {currentStep < 4 && (
          <button onClick={() => setCurrentStep((prev) => prev + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default CourseForm;
