const Footer = () => {
  let today = new Date();
  return (
    <footer className = "container">
      <div className = "row justify-content-center mt-3 mb-4">
        <div className = "col-8">
          <h4>
            Team allocation application, {today.getFullYear()} Copywright: @Gani
          </h4>
        </div>
      </div>
    </footer>
  )
}
export default Footer;