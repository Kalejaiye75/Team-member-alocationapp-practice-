
const Header = ({selectedEmployees, teamMemberCount}) => {
  return (
    <header className="container">
      <div className ="row justify-content-center mb-3 mb-4">
        <div className = "col-8">
          <h1 className="mt-4 p5 bg-dark text-white rounded">
          Team Member Allocation
          </h1>
          <h3>{selectedEmployees} has {teamMemberCount} members</h3>
        </div>
      </div>
    </header>
  )
}
export default Header;