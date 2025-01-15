import React from "react";

interface Step {
  icon: JSX.Element;
}

interface StepIndicatorProps {
  steps: Step[];
  activeStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, activeStep }) => {
  return (
    <ol className="flex items-center w-full">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex w-full items-center ${
            index < activeStep
              ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
              : "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
          }`}
        >
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
              index < activeStep
                ? "bg-blue-100 dark:bg-blue-800"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <svg
              className={`${
                index < activeStep
                  ? "w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                  : "w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {step.icon}
            </svg>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default StepIndicator;
