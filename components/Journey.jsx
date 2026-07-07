import { HiAcademicCap } from 'react-icons/hi';
const journey = [
    {
        years: "Aug 2022 - May 2026",
        role: "B.tech (C.S.E)",
        institution: "Vision Institute of Technology, Aligarh"
    },
    {
        years: "Apr 2021 - Mar 2022",
        role: "12th (U.P Board)",
        institution: "Aadarsh Gyandeep Inter College, Aligarh"
    },
    {
        years: "Apr 2019 - Mar 2020",
        role: "10th (C.B.S.E Board)",
        institution: "New India High School, Pinjore"
    }
]

const Journey = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-start gap-4 mb-5">
                <HiAcademicCap className='text-white text-4xl bg-accent p-1 rounded-full'/>
                <h2 className='text-accent text-2xl font-bold'>Education</h2>
            </div>
            {
                journey.map((item, index) => {
                    const { institution, role, years } = item;
                    return (
                        <div key={index} className='flex items-center gap-12 w-full '>
                            <div className="flex flex-col w-max justify-center items-center">
                                <div className="w-3 h-3 bg-accent rounded-full"></div>
                                <div className="w-[1px] h-[180px] bg-white/10"></div>
                            </div>
                            <div className='max-w-[500px] bg-accent/10 p-2 rounded-lg'>
                                <p className='mb-6 text-lg text-white/50'>{years}</p>
                                <h4 className='h4 mb-2'>{role}</h4>
                                <p className='text-lg text-white/50 '>{institution}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Journey
