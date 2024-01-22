import React from "react";
import satelitImg from "../../assets/satelite2.jpg";
import { Link } from 'react-router-dom';

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Space Image Gallery
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Embark on a visual journey through the cosmos with our curated selection of stunning images from NASA's extensive gallery. Each picture captures a unique aspect of our universe, from distant galaxies and vibrant nebulae to the intricate details of planetary surfaces. These images, a blend of science and art, offer glimpses into the uncharted realms of space, inviting you to explore the mysteries and beauty of the cosmos. Discover the awe-inspiring sights that await beyond our earthly bounds.
              </p>
              <Link to="/NasaImages">
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
              </Link>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
