export default function Certificates() {

    const certifications = [
      {
        id: 1,
        title: "Java Programming",
        image: "/cert2.jpg",
        description:
          "Strong foundation in Java, OOP concepts, collections and multithreading.",
        skills: ["OOP", "Collections", "Multithreading"],
        link: "#"
      },
      {
        id: 2,
        title: "Data Structures & Algorithms",
        image: "/cert3.jpg",
        description:
          "Solved 300+ DSA problems and mastered core concepts like trees, graphs and DP.",
        skills: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
        link: "#"
      }
    ];
  
    return (
      <section
        id="certificates"
        className="min-h-screen bg-[#020d1f] py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
            Certifications
          </h2>
  
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col md:flex-row items-center gap-12 mb-20"
            >
  
              {/* LEFT - Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
  
              {/* RIGHT - Description */}
              <div className="md:w-1/2 w-full bg-[#0a192f] p-8 rounded-2xl shadow-lg border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {cert.title}
                </h3>
  
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>
  
                <a
                  href={cert.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                >
                  View Certificate
                </a>
              </div>
  
            </div>
          ))}
  
        </div>
      </section>
    );
  }
  