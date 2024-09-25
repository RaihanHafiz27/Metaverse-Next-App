import CardSection from "../slider/CardSlider";

const LatestNewsSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col  items-center justify-evenly">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl font-bold text-center text-cyan-500"
      >
        Latest News
      </h2>
      <div className="w-11/12 2xlw-4/5">
        <CardSection />
      </div>
    </section>
  );
};

export default LatestNewsSection;
