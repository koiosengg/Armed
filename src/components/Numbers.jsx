import React, { useEffect, useRef, useState } from "react";

function Numbers() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const animateValue = (startVal, endVal, duration, setter) => {
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(startVal + (endVal - startVal) * progress);
      setter(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [year, setYear] = useState(2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (start) {
      animateValue(0, 650, 2000, setProjects);
      animateValue(0, 14, 2000, setExperience);
      animateValue(2000, 2013, 2000, setYear);
    }
  }, [start]);

  return (
    <section className="numbers" ref={sectionRef}>
      <article>
        <span>{projects}+</span>
        <p>Projects across India</p>
      </article>

      <article>
        <span>{experience}+</span>
        <p>Years of Experience</p>
      </article>

      <article>
        <span>{year}</span>
        <p>Established</p>
      </article>
    </section>
  );
}

export default Numbers;
