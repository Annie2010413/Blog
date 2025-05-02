interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Experices',
    description: `2022-2023                                              
    Vice president and Activity Manager of ZhongShan English Debate Club
    2025 
    Drama director and Instructor of 2025 NTU Comsa Camp
    2025<br>
    Member of Public Relations Department of NTU IM night`,
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
