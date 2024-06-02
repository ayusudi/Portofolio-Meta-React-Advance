
export default function NavBar() {
  return (
    <nav className="flex bg-[#f5f4f7]">
      <div className="flex-1 justify-center items-center p-3">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" style={{ width: 30, height: 30, objectFit: "contain" }} />
      </div>
      <div className="flex-1 flex gap-5 justify-center items-center p-3 ">
        <a href="#projects" className="md:flex hidden">Projects</a>
        <a href="#contactme" className="md:flex hidden">Contact Me</a>
      </div>
      <div className="flex-1 flex gap-5 justify-end items-center p-3">
        <a href="https://linkedin.com/in/ayusudi"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://x.com/ayusudii"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://github.com/ayusudi"><i class="fa-brands fa-github"></i></a>
      </div>
    </nav>
  )
}