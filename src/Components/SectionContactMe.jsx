
import { useState } from "react"

export default function SectionContactMe() {
  const [input, setInput] = useState({
    email: "",
    name: "",
    subject: "",
    message: ""
  })

  const changeInput = (key, value) => {
    let inputClone = { ...input }
    inputClone[key] = value
    setInput(inputClone)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setInput({
      email: "",
      name: "",
      subject: "",
      message: ""
    })
  }

  return (
    <section className="bg-[#D8D5FF] p-4" id="contactme">
      <form className="py-5 w-[310px] md:w-5/12  m-auto flex flex-col gap-4" onSubmit={(e) => sendEmail(e)} id="ContactMe" action="" style={{ display: "flex", flexDirection: "column" }}>
        <p className="text-2xl">Contact Me via Email</p>
        <div>
          <label htmlFor="" className="mr-2">Name<span>:</span></label>
          <input type="text" name="name" id="inputName" onChange={(e) => changeInput("name", e.target.value)} />
        </div>
        <div>
          <label htmlFor="" className="mr-2">Email<span>:</span></label>
          <input type="email" name="email" id="inputEmail" onChange={(e) => changeInput("email", e.target.value)} />
        </div>
        <div>
          <label htmlFor="" className="mr-2">Subject<span>:</span></label>
          <select name="" id="" onChange={(e) => changeInput("subject", e.target.value)}>
            <option value="">----- Select ----</option>
            <option value="Event">Event</option>
            <option value="Hobby">Hobby</option>
            <option value="Project">Project</option>
            <option value="Feedback">Feedback</option>
            <option value="Interesterd to collaborate">Interested to collaborate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Type the message here.." style={{ padding: 5, margin: "8px 0" }} onChange={(e) => changeInput("message", e.target.value)}></textarea>
        <button className="bg-[#6C63FF] py-2 px-4 rounded text-white self-start" type="submit">Send your message</button>
      </form>
    </section>
  )
}