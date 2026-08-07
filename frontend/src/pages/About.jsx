import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-112.5" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we believe that fashion should be simple, accessible,
            and inspiring. Our mission is to provide high-quality clothing that
            combines comfort, style, and affordability, helping you feel
            confident every day.
          </p>
          <p>
            We carefully curate our collections to offer modern designs,
            reliable quality, and a seamless shopping experience. Whether you're
            looking for everyday essentials or standout pieces, we're committed
            to bringing you products that match your lifestyle and personal
            style.
          </p>
          <b>Our Mission</b>
          <p>
            Our goal is to make online shopping easy, enjoyable, and
            trustworthy. We strive to deliver exceptional customer service,
            carefully selected products, and a shopping experience that keeps
            our customers coming back. Every decision we make is driven by our
            commitment to quality, value, and customer satisfaction.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We carefully select every product to ensure it meets our standards
            for quality, comfort, and durability. Our goal is to provide
            clothing that looks great, feels great, and lasts longer.
          </p>
        </div>

        <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Enjoy a smooth and hassle-free shopping experience with an
            easy-to-use website, secure checkout, and fast delivery. Finding
            your favorite styles has never been easier.
          </p>
        </div>

        <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exception Customer Service:</b>
          <p className="text-gray-600">
            Your satisfaction is our priority. Our support team is always ready
            to assist you with any questions, ensuring a friendly and reliable
            shopping experience from start to finish.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
