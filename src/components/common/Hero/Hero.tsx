import React from "react"
import { Hero as HeroInterface } from "../../../types/data.types"
// @ts-ignore
import { useWidth } from "../../../hooks/useWidth"
import { Link } from "react-router-dom"

const Hero: React.FC<HeroInterface> = (props) => {
  const { backgroundImage, mobileImage, title, subtitle, buttonText, buttonUrl } = props

  const regular = useWidth();

  const bgImage = regular ? backgroundImage : mobileImage

  console.log(bgImage)

  {/* Jovan TODO za lang*/}
  return (
    <div className={`relative w-full h-full min-h-[100vh] flex flex-col justify-center bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage})` }} >
      <div className="absolute w-full h-full z-0 bg-hero-overlay" />
      <div className="w-full h-full z-10 px-3 text-white flex flex-1 items-center flex-wrap">

        <div className="flex-1">
          <div className="max-w-[700px] md:pl-15">
            <h1 className="text-4xl leading-snug font-bold">{title.cir}</h1>
          </div>

          <div className="max-w-[900px] md:pl-15 md:pt-[30px]">
            <p className="text-lg opacity-60">Similique rerum iure adipisci molestiae consectetur in deleniti, inventore non quod porro neque pariatur quos ipsam illum natus quam officia ab laborum? Necessitatibus, deserunt! Saepe laudantium, maxime ut doloribus perspiciatis, eveniet reiciendis cupiditate hic fuga quod repellendus harum ipsam non. Magni voluptas dolorem illum, explicabo necessitatibus fuga molestiae quo! Delectus, eligendi deserunt perspiciatis quaerat maxime odio at praesentium nulla? Architecto, fugiat facere.</p>
          </div>
        </div>
        
        <div className="flex justify-end self-end px-40 py-20">
          <Link to={buttonUrl} className="rounded-4xl px-12 py-4 bg-red-500 text-2xl hover:cursor-pointer hover:opacity-90">
            {buttonText.cir} &#8594;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero