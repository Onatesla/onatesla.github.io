import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
"https://www.fotografiadimatrimonio.it/wp-content/uploads/2017/01/FDM0638_04_2016-1024x683.jpg",
"http://www.comunesanquirico.it/wp-content/uploads/IMG_4645-1600x1200.jpg",
"https://media.wsimag.com/attachments/533331fb345a51af37c5a62ce0727b0334de60ed/store/fill/860/645/ceee17d3ffd5b56c5a55f5a8657c19b1a29eb3998fe112a725a4bf71231c/Matrimonio.jpg",
"https://www.chietitoday.it/~media/horizontal-hi/58437727219400/matrimoni-2.jpg",
"https://www.controventofregene.com/wp-content/themes/controvento/images/matrimonio-sulla-spiaggia-fregene-controvento.jpg",
"https://www.controventofregene.com/wp-content/themes/controvento/images/matrimonio-sulla-spiaggia-fregene-controvento.jpg"
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

