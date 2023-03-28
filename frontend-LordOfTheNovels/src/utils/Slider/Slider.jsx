import { Swiper } from "swiper/react"
import { Pagination, A11y, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

import "./Slider.css"

export default function Slider({settings, children}){
  return(
  <Swiper modules={[Pagination, A11y, Autoplay]} {...settings}>
    {children}
  </Swiper>
  )
}