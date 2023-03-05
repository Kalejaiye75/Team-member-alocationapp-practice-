
const Header = ({selectedEmployees, teamMemberCount}) => {
  return (
    <header>
      <h1 className="mt-4 p5 bg-dark text-white rounded">
        Team Member Allocation
      </h1>
      <h2>{selectedEmployees} has {teamMemberCount} members</h2>
    </header>
  )
}
export default Header;