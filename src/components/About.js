import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "Hi, I'm Gandham Mounika Sri Lakshmi — a CSE undergrad (SVECW, CGPA 9.11) passionate about Web Development and Machine Learning.",
    line2:
      "Frontend: HTML, CSS, JavaScript, React.js • Backend: Node.js, Express.js, MongoDB • Plus: Python, Java, OOPs, DSA, OS, Cloud basics.",
    line3:
      "Built a Weather App (API), Automatic Timetable Generator (PHP/MySQL), a MERN e-commerce platform, and Brain Tumor Detection using VGG16.",
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} alt="About illustration" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
