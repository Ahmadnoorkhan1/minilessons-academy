import Stepper from "../../components/ui/Steps"

const EasyCourseCreator = () => {
  return (
    <div className="flex items-center p-16 w-full ">
      <Stepper currentStep={1} />
    </div>
  )
}

export default EasyCourseCreator