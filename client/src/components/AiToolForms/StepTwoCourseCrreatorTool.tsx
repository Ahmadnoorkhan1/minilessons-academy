
const StepTwoCourseCrreatorTool = () => {
  const suggestedTitles = ['A','B','C']
    return (
    <div className='flex flex-col items-center justify-center p-8'>
    <h2>Choose A More Detailed Title for Your Course Or click the link below to enter your own!</h2>
    <div className='flex justify-between gap-2'>
        {suggestedTitles.map((title:string)=>{
            return(<button className='btn btn-primary w-1/2' onClick={()=>localStorage.setItem('selectedTitle',title)}>{title}</button>)
        })}
    </div>
    </div>
  )
}

export default StepTwoCourseCrreatorTool