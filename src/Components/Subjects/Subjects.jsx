import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function SubjectsCarousel() {
  const subjects = [
    "ريض ١٥١",
    "ريض ١٥٢",
    "ريض ٢٥٣",
    "ريض ٢٦١",
    "ريض ٣٦٢",
    "ريض ٣٦٤",
    "ريض ٣٥٢",
    "ريض ٢٦٢",
    "ريض ٣٦٦",
    "ريض ٣٦٥",
    "ريض ٢٦٣",
    "ريض ٣٦٣",
  ];

  // تقسيم المقررات إلى مجموعات من 4 لكل شريحة
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groupedSubjects = chunkArray(subjects, 4);

  // تحويل اسم المقرر إلى رابط مثل math151
  const generateRoute = (subject) => {
    const arabicNumbers = "٠١٢٣٤٥٦٧٨٩";
    const englishNumbers = "0123456789";

    const convertToEnglishNumbers = (str) =>
      str.replace(/[٠-٩]/g, (d) => englishNumbers[arabicNumbers.indexOf(d)]);

    const raw = subject.replace("ريض", "math").replace(/\s/g, "");
    return convertToEnglishNumbers(raw);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <section
      className="py-5 px-3 subjects-carousel"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <h2 className="text-center mb-4" style={{ color: "var(--primary-dark)" }}>
        مقررات الرياضيات
      </h2>
      <hr
        style={{
          height: "3px",
          width: "200px",
          backgroundColor: "var(--primary-dark)",
          border: "none",
          margin: "1rem auto 2rem auto",
          opacity: 1,
          borderRadius: "4px",
        }}
      />

      <div className="container">
        <Slider {...settings}>
          {groupedSubjects.map((group, index) => (
            <div key={index}>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {group.map((subject, idx) => (
                  <Link
                    to={`/${generateRoute(subject)}`}
                    key={idx}
                    className="text-decoration-none"
                  >
                    <div
                      className="card p-3 shadow-sm text-center"
                      style={{
                        minWidth: "200px",
                        flex: "0 0 auto",
                        borderRadius: "12px",
                        backgroundColor: "var(--white)",
                        color: "var(--primary-dark)",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        transition: "transform 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      {subject}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
