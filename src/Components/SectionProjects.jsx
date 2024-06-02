import Card from "./Card"

export default function SectionProjects() {
  let data = [
    {
      id: 1,
      name: "ImageWise",
      image: `${process.env.PUBLIC_URL}/imagewise.png`,
      dec: "ImageWise simplifies web development with its WebP converter and AI features.",
      link: "https://imagewise-ayusudi.vercel.app"
    },
    {
      id: 2,
      name: "DiagnoAkses",
      image: `${process.env.PUBLIC_URL}/diagnoakses.png`,
      dec: "A cross-platform application for the feature of pre-diagnosis, submitted to Healthkathon 2 by BPJS.",
      link: "https://youtu.be/OFVbYq7pEDI"
    },
    {
      id: 3,
      name: "Static Web Parralax",
      image: `${process.env.PUBLIC_URL}/womenland.png`,
      dec: "A parallax scrolling website is static for the webinar class at Womenland Summer, held on May 26, 2024.",
      link: "https://ayusudi.github.io/womenland-summer-parallax"
    }
  ]
  return (
    <section id="projects" className="p-10"  >
      <p className="text-[#6c63ff] text-2xl text-center pb-8 underline decoration-wavy">Projects</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-8">
        {data.map((el) => <Card key={el.id} el={el} />)}
      </div>
    </section>
  )
}