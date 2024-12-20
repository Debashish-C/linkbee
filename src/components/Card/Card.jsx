const Card = (props) => {
  return (
    <div className='p-4  rounded-xl shadow-xl h-[28rem] w-80   bg-slate-100 hover:bg-slate-400 ' >
      <div className="flex justify-center align-middle">

    <img src={props.card} alt="img" className=""/>
      </div>
      <h2 className="p-2 text-4xl "    style={{
            "font-family": "Mouse Memoirs,serif",
            "font-weight": 400,
            "font-style": "normal",
          }}>{props.heading}</h2>
      <p className="text-xl" style={{
                "font-family": "Lora, serif",
                "font-optical-sizing": "auto",
                "font-weight": 600,
                "font-style": "normal",
              }}>{props.content}</p>
    </div>
  )
}

export default Card
