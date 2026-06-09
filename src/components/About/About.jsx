
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-8 md:px-16 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full">

        {/* Left Side */}
        <div className="md:w-1/2">

          {/* Greeting */}
          <h3 className="text-3xl font-medium mb-2">
            Hi, I am
          </h3>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl font-bold mb-5">
            Prachi Joshi
          </h1>

          {/* Skills */}
          <div className="text-2xl md:text-3xl font-semibold mb-8">

            I am a{" "}

            <ReactTypingEffect
              text={[
                "Full Stack Developer",
              
                "DevOps Ethusiast",
                "Coder",
              ]}
              speed={80}
              eraseSpeed={40}
              typingDelay={500}
              className="inline-block text-purple-400"
            />

          </div>

          {/* Description */}

          <p className="text-gray-400 leading-8 max-w-xl mb-10">

            
            Passionate IT student focused on transforming ideas into real-world digital solutions through 
            Full Stack Development and Cloud technologies. I continuously learn,
             innovate, and build scalable applications with a focus on performance and user experience.

          </p>

          {/* BUTTONS */}

        
<div className="flex gap-5 flex-wrap mt-8 mb-12">


            {/* DOWNLOAD CV */}

            <a
              href="/Prachi_Joshi_Resume.pdf"
              download
              className="
              px-8
              py-4
              rounded-xl
              border-2
              border-purple-500
              bg-black
              text-white
              font-medium
              overflow-hidden
              transition-all
              duration-500
              hover:bg-purple-600
              hover:shadow-[0_0_30px_rgba(168,85,247,.5)]
              hover:-translate-y-1
              "
            >
              Download Resume
            </a>

            {/* CONTACT ME */}

            <a
              href="#contact"
              className="
              px-8
              py-4
              rounded-xl
              border-2
              border-cyan-500
              bg-black
              text-white
              font-medium
              transition-all
              duration-500
              hover:bg-cyan-500
              hover:text-black
              hover:shadow-[0_0_30px_rgba(6,182,212,.5)]
              hover:-translate-y-1
              "
            >
              Contact Me
            </a>

          </div>

        </div>

     


{/* Right Side */}
<div className="md:w-1/2 flex justify-center md:justify-center lg:pr-12">

  <div className="relative group">

    {/* Glow */}
    <div
      className="
      absolute
      inset-0
      rounded-full
      bg-purple-500
      blur-[90px]
      opacity-20
      scale-110
      group-hover:opacity-35
      transition-all
      duration-700
      "
    />

    {/* Gradient Border */}
    <div
      className="
      relative
      p-[5px]
      rounded-full
      bg-gradient-to-br
      from-purple-500
      via-pink-500
      to-cyan-500
      "
    >

      <img
        src={profileImage}
        alt="profile"
        className="
        w-[300px]
        h-[300px]

        md:w-[360px]
        md:h-[360px]

        lg:w-[390px]
        lg:h-[390px]

        rounded-full
        object-cover

        transition-all
        duration-700

        hover:scale-[1.04]

        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      />

    </div>

  </div>

</div>






      </div>
    </section>
  );
};


export default About;
