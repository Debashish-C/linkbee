const Card = (props) => {
  return (
    <div className='p-5 rounded-md shadow-xl h-96 w-72 bg-slate-100 hover:bg-slate-200 ' >
    <img src={props.card} alt="img" className=""/>
      <h2 className="text-2xl font-light ">{props.heading}</h2>
      <p className="font-sans font-semibold">{props.content}</p>
    </div>
  )
}

export default Card
