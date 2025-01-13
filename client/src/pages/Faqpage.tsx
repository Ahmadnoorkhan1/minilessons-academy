import Faq from "../components/Faq"

const Faqpage = () => {
  return (
    <>  
      <div className="flex flex-col container justify-center items-center pt-8">
        <h1 className="banner-title">Frequently Asked Questions</h1>
        <Faq />
        <img
        className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        src="images/banner-shape.svg"
        alt=""
      />
      </div>
    </>
  )
}

export default Faqpage