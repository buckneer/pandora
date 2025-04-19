import React from "react"
import { Hero as HeroInterface } from "../../../types/data.types"
// @ts-ignore
import { useWidth } from "../../../hooks/useWidth"
import { Link } from "react-router-dom"
import TranslatedText from "../TranslatedText/TranslatedText"
import { getTranslatedString } from "../../../utils/utils"
import { useLanguage } from "../../../context/LanguageContext"

const Hero: React.FC<HeroInterface> = (props) => {
  const { backgroundImage, mobileImage, title, subtitle, buttonText, buttonUrl } = props
  const { selectedLanguage } = useLanguage();
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
            <h1 className="text-4xl leading-snug font-bold" data-aos="fade-left">
              <TranslatedText text={title} />
            </h1>
          </div>

          <div className="max-w-[900px] md:pl-15 md:pt-[30px]">
            <p className="text-lg opacity-60">
              {
                getTranslatedString(subtitle, selectedLanguage).split(' ').map((item, index) => (
                  <span key={index} data-aos="fade-in" data-aos-delay={index * 50}>{ item }{' '}</span>
                ))
              }
            </p>
          </div>
        </div>
        
        <div className="flex justify-end self-end px-40 py-20">
          <a 
            href={buttonUrl}
            target="_blank"
            className="rounded-4xl px-12 py-4 bg-red-500 text-2xl hover:cursor-pointer hover:opacity-90"
            data-aos="fade-up"
          >
            <TranslatedText text={buttonText} /> &#8594;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero