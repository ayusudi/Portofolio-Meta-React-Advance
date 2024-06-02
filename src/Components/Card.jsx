export default function Card({ el }) {
  return (
    <div key={el.id} className="bg-white p-4 rounded w-[300px] flex flex-col gap-2 items-start">
      <img className="rounded" src={el.image} alt={el.name} style={{ width: 300, height: 160, objectFit: "cover" }} />
      <p className="text-xl font-semibold">{el.name}</p>
      <p className="text-justify">{el.dec}</p>
      <a className="text-white py-2 px-4 rounded bg-[#6c63ff]" href={el.link}>Open</a>
    </div>
  )
}