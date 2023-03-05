import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"
import "./Staff.css"


const Staffs = ({employees, selectedEmployees, handleEmployeesCardClick, handleTeamSelection}) => {

 
  return (
    <main className = "container">
      <div>
        <div className="select-container">
          <select className="form-select form-select-lg" value={selectedEmployees} onChange={handleTeamSelection}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
       
      <div className="card-div1">
      
        <div className="card-div2">
          {employees.map((staff) => (
          <div key={staff.id} className={(staff.teamName === selectedEmployees ? "card m-2 standout" : "card m-2")} onClick={handleEmployeesCardClick}> 
            {staff.gender === "male" ? <img src={maleProfile} className="card-img"/> : <img                 src={femaleProfile} className="card-img"/>}
            <div className="card-box">
              <h5 className="card-name">Full Name:{staff.fullName}</h5>
              <p className="card-job"><b>Designation:</b>                                                   {staff.designation}</p>
            </div>
          </div>
          
  ))    
}
        </div>
      </div>
  </main>
);
}
export default Staffs;