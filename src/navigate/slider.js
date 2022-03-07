import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
  "https://i.ibb.co/0YtSZbF/Bruno-e-Federica-210821-35.jpg",
  "https://i.ibb.co/RzcWXPK/copertina-30x40.jpg",
  "https://i.ibb.co/qYYZnQW/Pagina039-2.jpg",
  "https://i.ibb.co/PrSYfXn/Pagina038.jpg",
  "https://i.ibb.co/7jz3MTw/Pagina039-3.jpg",
  "https://i.ibb.co/6mPVyNV/Pagina039.jpg",
]

const Sliderone = () => {
    var settings = {
        dots: false,
        infinite: true,
        fade:true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility:true,
        dotsClass:"slick-dots",
      };
   
        return (
          <Slider {...settings}>
            <div>
              <img src={data[0]} alt="ide" className="photo" />
            </div>
            <div>
            <img src={data[1]} alt="ide" className="photo"  />
            </div>
            <div>
            <img src={data[2]} alt="ide" className="photo"  />
            </div>
            <div>
            <img src={data[3]} alt="ide" className="photo" />
            </div>
            <div>
            <img src={data[4]} alt="ide" className="photo"  />
            </div>
            <div>
            <img src={data[5]} alt="ide" className="photo"  />
            </div>
          </Slider>
        );
      }


export default Sliderone;

