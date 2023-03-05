import {useState} from "react"
import './App.css'
import Header from "./Header"
import Staffs from "./Staffs"
import Footer from "./Footer"


export default function App() {

   const [selectedEmployees, setSelectedEmployees] = useState("TeamA");
  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Abdulganiy Kalejaiye",
    designation: "Frontend Engineer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Mufeedah Lawal",
    designation: "Backend Engineer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Khodijah Abdusalam",
    designation: "Javascript Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Jaiye Ganikale",
    designation: "Fullstack Engineer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "Abdulganiy kale",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Miskiyah Oke",
    designation: "Product Manager",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "Taofeeq Badmus",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Aaisha Abdumumin",
    designation: "Product Designer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Moriam Muadh",
    designation: "DotNet Engineer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Yusuf Akingbade",
    designation: "Ruby Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Abdulhamid Mikail",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Moshood Lambe",
    designation: "Data Analyst",
    gender: "male",
    teamName: "TeamD"
  }
  ]);

  const handleTeamSelection = (e) => {
    setSelectedEmployees(e.target.value)
    
  } 

  const handleEmployeesCardClick = (e) => {
    const transformedEmployeesArr = employees.map((staff) => staff.id===parseInt(e.currentTarget.id) ?(staff.teamName === selectedEmployees)?{...staff, teamName: ""}:{...staff, teamName: selectedEmployees} :staff)

    setEmployees(transformedEmployeesArr);
  }
  
  
  return (
    <main>
      <p>Hello idiots!!!</p>
      <Header selectedEmployees={selectedEmployees}
              teamMemberCount= {employees.filter((staff)=> staff.teamName ===                                     selectedEmployees).length}/>
      <Staffs employees={employees} 
              selectedEmployees={selectedEmployees}
              handleEmployeesCardClick={handleEmployeesCardClick}
              handleTeamSelection={handleTeamSelection}/>
      <Footer />
    </main>
  )
}
