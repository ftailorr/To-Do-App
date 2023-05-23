import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-light-beige to-medium-dark-beige"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          laudantium deleniti dolorem dolorum porro, ratione vitae eius deserunt
          veniam sequi laborum provident aperiam, perferendis sapiente ut quod
          est debitis eum!
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          placeat adipisci aliquam reprehenderit iusto ut, veritatis magnam
          ipsum aspernatur perferendis aperiam nobis quidem officiis sed minus
          culpa minima. Dignissimos iure quisquam fuga quibusdam reiciendis
          iusto, incidunt magnam explicabo doloremque quia cumque id aliquam
          quasi nesciunt alias veniam! Veniam, reprehenderit iste.
        </p>
      </div>
    </div>
  );
};

export default About;
