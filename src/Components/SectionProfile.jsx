import image from "../asset/undraw_Coffee_Time_e8cw.png"
export default function SectionProfile() {
  return (
    <section className="flex flex-col justify-center items-center mb-9">
      <img src={image} style={{ height: 250, width: 250, objectFit: "contain" }} alt="profile" />
      <p className="text-2xl">Ayu Sudi Dwijayanti</p>
      <p className="text-[#6C63FF] font-semibold py-1">Fullstack Developer</p>
      <p className="md:w-5/12 w-[310px] text-center py-2">I'm a developer specializing in <b>JavaScript</b>. My expertise lies in front-end development with <code>React</code>, <code>Next.js</code>, and <code>Vue.js</code>, and I'm skilled in back-end development using <b>JavaScript</b> with <code>Express</code> and <b>Python</b> with <code>Flask</code>. Additionally, I have experience in mobile development with React Native. Currently, I'm diving into <b>TypeScript</b> to expand my skill set even further.</p>
    </section>
  )
}