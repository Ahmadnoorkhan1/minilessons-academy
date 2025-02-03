
const StepsThirdCourseCreator = () => {
  const title  = JSON.stringify(localStorage.getItem('selectedTitle'));
  return (
    <div className="flex flex-col justify-center items-center p-8">
        <h2>Find out What Your New Course Will Cover!</h2>
        <input type="text" placeholder="" value={title} />

    </div>
  )
}

export default StepsThirdCourseCreator