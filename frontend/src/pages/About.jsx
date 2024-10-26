import about from "../../src/assets/about_image.png";

function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={about} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            It typically includes sections for the doctor’s personal details
            like name, profile picture, specialization, qualifications, and
            years of experience. Contact information, such as email, phone
            number, and clinic address, is also included, along with optional
            links to social media or professional networks
          </p>
          <p>
            Doctors can update their availability and schedule, specifying
            working hours and appointment slots, and, if integrated, manage
            their appointment booking links.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            here is also an option to manage and display patient feedback,
            reviews, and ratings. Finally, the system allows doctors to update
            their license numbers, certifications, and upload relevant
            documentation, ensuring all necessary professional information is
            accurate and up-to-date.
          </p>
        </div>
        
      </div>
      <div className="text-xl my-4">
          <p>
            WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b> Efficency</b>
            <p>Streamlined appointment that fits into your busy lifestyle</p>
          </div >
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b> Convienence</b>
            <p> Access to a network healthcare in ypur area</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Personilzation:</b>
            <p>Tailored recommendations and remainders to help you</p>
          </div>
        </div>
    </div>
  );
}

export default About;
