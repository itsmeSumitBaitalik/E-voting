import { useState, useEffect } from "react";
import img1 from "./img/slide1.jpg";
import img2 from "./img/slide2.jpg";
import img3 from "./img/slide3.jpg";
import img4 from "./img/slide4.png";
import img5 from "./img/slide5.gif";
import img6 from "./img/slide6.jpg";

const FruitSlideshow = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full max-w-3xl rounded-lg transition-opacity duration-500"
      />
    </div>
  );
};

export default FruitSlideshow;
