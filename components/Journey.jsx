import { HiAcademicCap } from "react-icons/hi";
const journey = [
  {
    years: "Aug 2022 - May 2026",
    role: "B.tech (C.S.E)",
    institution: "Vision Institute of Technology, Aligarh, Uttar Pradesh",
  },
  {
    years: "Apr 2021 - Mar 2022",
    role: "12th (U.P Board)",
    institution: "Aadarsh Gyandeep Inter College, Aligarh, Uttar Pradesh",
  },
  {
    years: "Apr 2019 - Mar 2020",
    role: "10th (C.B.S.E)",
    institution: "New India High School, Pinjore, Haryana",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-6 md:mb-8">
        My <span className="text-accent">Education</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years } = item;
        return (
          <div
            key={index}
            className="flex items-center gap-1 md:gap-8  xl:gap-12 w-full"
          >
            <div className="flex flex-col w-max justify-center items-center md:gap-3">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-px h-[150px] md:h-[160px] xl:h-[180px] bg-white/10"></div>
            </div>
            <div className="md:w-[500px] bg-accent/10 p-2 md:p-4 rounded-lg">
              <p className="mb-2 xl:mb-6 text-sm md:text-base lg:text-lg text-white/50">
                {years}
              </p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-sm md:text-base lg:text-lg text-white/50 ">
                {institution}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
