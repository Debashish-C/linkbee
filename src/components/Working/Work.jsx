import { useState } from "react";
import user from "../../assets/user.png"
import LinkView from "../Link/LinkView";


const Work = () => {

    const [background,setBackground] = useState("white");
    const [color,setColor] = useState("black");
    const [array,setArray] = useState([]);
    const [bio,setBio] = useState("");
    const [profile,setProfile] = useState(user)
    const [fonts,setFont] = useState();
    const handleBio = () =>{

        setBio(document.getElementById('bio').value);
    }

    const addLink = () => {
        let link = document.getElementById('linkId').value;
        let icon = document.getElementById('icon').value;
        if(link && icon)
        setArray([...array,
            {
                icon,link,
            }
        ]);
    }

    const remove = (index) => {
        console.log(index);
        setArray(array.filter((v,i)=> {if(i !== index) return v}))
        
    }

    const handleBackground = (e) => {
        // document.getElementById('back').addEventListener("change",(e) => {
            setBackground(URL.createObjectURL(e.target.files[0]));
        // })
    }
    
    const handleProfile = (e) => {
        setProfile(URL.createObjectURL(e.target.files[0]))
    }
  return (
    <>
   
    <div className="flex justify-around w-full h-full pt-20 mt-10 align-middle">
      <div id="phone" className="flex-col justify-center w-1/3 p-3 border-2 border-black rounded-md bg-slate-300" style={{color : color,fonts}}>
     <div className="flex justify-center">

      <div className="h-10 rounded-2xl w-52 bg-slate-700">-</div>
     </div>
        <div className="flex justify-center text-center align-middle">
          <div className="w-full mt-10">
            <img
              src={background}
              alt=""
              className="w-full rounded-md h-44 " style={{background : background}}
            />
            <div className="relative flex justify-center -top-16">
              <img
                src={profile}
                alt="img"
                id="profileIcon"
                className="rounded-full -z-4 h-52 w-52 bg-slate-100"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <textarea disabled name="" id="" className="p-3 w-[26rem] outline-none bg-slate-300 rounded-md text-center text-2xl" placeholder=" Bio" value={bio}>
            
          </textarea>
        </div>
        <div className="">
            {
                array.map((v,i)=><div key={i}><LinkView  icon={v.icon} index={i} linked={v.link} remove={remove}/></div>)
            }
        </div>
      </div>

      {/* designing */}
      <div className="w-1/2 h-full p-10 bg-slate-000">
        <div className="mb-8">
          <h2 className="text-center "
          style={{
            "font-family": "Mouse Memoirs,serif",
            "font-weight": 400,
            "font-style": "normal",
            "fontSize":"5rem"
          }}
          >~ Start designing ~</h2>
        </div>
        <div className="flex-col justify-center align-middle">
            <h2 className="flex justify-start m-3 text-cyan-800 "
           style={{
            "font-family": "DynaPuff, serif",
            "font-optical-sizing": "auto",
            "font-weight": 200,
            "fontSize":"40px",
            "font-style": "normal",
            "font-variation-settings":
              "wdth 200"
          }}
            
            >  Background : </h2>
            <div className="flex justify-center p-4 pl-4 pr-4 m-2 mb-4 align-middle shadow-xl rounded-xl bg-slate-400 w-fit ">
                <div className="flex justify-center pt-2 align-middle">

                <input type="file" id="back"  placeholder="upload background image" onChange={handleBackground}/>
                </div>
                <div className="">

            <button className="p-2 bg-slate-300 rounded-xl" onClick={handleBackground}>upload</button>
                </div>
            </div>
            <div className="flex justify-center overflow-auto align-middle ">
            <div className="m-4">
                <button className="w-16 h-16 bg-black shadow-lg shadow-slate-500" onClick={() => setBackground("black")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-red-800 shadow-lg shadow-slate-500" onClick={() => setBackground("#991b1b")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-blue-700 shadow-lg shadow-slate-500" onClick={() => setBackground("#1d4ed8")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-green-500 shadow-lg shadow-slate-500" onClick={() => setBackground("#22c55e")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-slate-600 shadow-slate-500" onClick={() => setBackground("#475569")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-stone-500 shadow-slate-500" onClick={() => setBackground("#78716c")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-white shadow-lg shadow-slate-500" onClick={() => setBackground("#ffffff")}></button>
            </div>
            </div>
            <div className="flex justify-center">
            <div className="m-4">
                <button className="w-16 h-16 bg-orange-600 shadow-lg shadow-slate-500" onClick={() => setBackground("#ea580c")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-yellow-500 shadow-lg shadow-slate-500" onClick={() => setBackground("#eab308")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-lime-600 shadow-slate-500" onClick={() => setBackground("#65a30d")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-teal-600 shadow-lg shadow-slate-500" onClick={() => setBackground("#0d9488")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-cyan-700 shadow-slate-500" onClick={() => setBackground("#0e7490")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-sky-700 shadow-slate-500" onClick={() => setBackground("#0369a1")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-violet-700 shadow-slate-500" onClick={() => setBackground("#6d28d9")}></button>
            </div>
            </div>
        </div>
        {/* profile picture */}
        <div className="flex-col justify-center m-3 align-middle">
            <div className="">
                <h1 className="m-2 text-cyan-800"
                style={{
                    "font-family": "DynaPuff, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 200,
                    "fontSize":"40px",
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 200"
                  }}
                >Profile Picture :</h1>
            </div>
            <div className="flex justify-center p-4 m-1 align-middle shadow-xl w-fit bg-slate-400 rounded-xl">
                <div className="pt-2">
                    <input type="file" id="profile" onChange={handleProfile}/>
                </div>
                <div className="">
                    <button className="p-2 rounded-xl bg-slate-300" >upload</button>
                </div>
            </div>
        </div>

        {/* bio */}
        <div className="">
            <div className="">
                <h2 className="p-3 m-4 mt-4 text-cyan-800"
                style={{
                    "font-family": "DynaPuff, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 200,
                    "fontSize":"40px",
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 200"
                  }}
                >Bio :</h2>
            </div>
            <div className="flex justify-center p-2 m-4 align-middle shadow-xl w-fit bg-slate-400 rounded-xl">
                <div className="text-center">

                <textarea name="" id="bio" placeholder="enter bio" className="font-semibold text-center rounded-lg outline-none w-96"></textarea>
                </div>
                <div className="pt-2 ml-4 mr-4 ">
                    <button className="p-2 font-mono rounded-lg bg-slate-300" onClick={handleBio}>save</button>
                </div>
            </div>
        </div>
        {/* add link */}
        <div className="mt-10">
            <div className="m-4">
                <h1 className="m-4 text-cyan-800"
                style={{
                    "font-family": "DynaPuff, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 200,
                    "fontSize":"40px",
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 200"
                  }}>Link :</h1>
            </div>
            <div className="flex justify-center p-4 m-1 align-middle shadow-xl w-fit bg-slate-400 rounded-xl">
                <div className="p-2">
                <select name="" id="icon" className="font-mono font-bold bg-slate-400">
                    <option value="facebook" className="">facebook</option>
                    <option value="instagram" className="">instagram</option>
                    <option value="email" className="">email</option>
                    <option value="linkedIn" className="">linkedIn</option>
                </select>
                </div>
            <div className="flex justify-center align-middle">
                    <input type="text" id="linkId" className="p-2 mr-3 font-semibold rounded-lg outline-none w-96 bg-slate-200" />
                </div>
                <div className="flex align-middle">
                    <button className="p-2 rounded-xl bg-slate-300" onClick={addLink}>Add</button>
                </div>
            </div>
        </div>
        {/* font */}
        <div className="m-3 mt-10 h-fit">
            <div className="">
                <h2 className="text-cyan-800"
                style={{
                    "font-family": "DynaPuff, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 200,
                    "fontSize":"40px",
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 200"
                  }}
                
                >Font :</h2>
            </div>
            <div className="flex-col justify-center align-middle h-96">
                <div className="flex justify-center p-2 m-2"
                style={{
                    "font-family": "DynaPuff, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 200,
                    "fontSize":"20px",
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 200"
                  }}
                >
                    <button onClick={() => setFont({"font-family": "DynaPuff, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 200,
                    "fontSize":"20px",
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 200"})}>The quick brown fox jumps over the lazy dog.</button>
                </div>
                <div className="flex justify-center p-2 m-2"
                style={{
                    "font-family": "Lora, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 600,
                    "font-style": "normal",
                    "fontSize":"20px",
                  }}
                >
                    <button>The quick brown fox jumps over the lazy dog.</button>
                </div>
                <div className="flex justify-center p-2 m-2"
                style={{
                    "font-family": "Sour Gummy, serif",
                    "font-optical-sizing": "auto",
                    "font-weight": 400,
                    "font-style": "normal",
                    "font-variation-settings":
                      "wdth 100",
                      "fontSize":"22px"
                  }}
                >
                    <button>The quick brown fox jumps over the lazy dog.</button>
                </div>
                <div className="flex justify-center p-2 m-2"
                 style={{
                    "font-family": "Mouse Memoirs,serif",
                    "font-weight": 400,
                    "font-style": "normal",
                    "fontSize" : "30px"
                  }}
                >
                    <button>The quick brown fox jumps over the lazy dog.</button>
                </div>
                <div className="flex justify-center p-2 m-2 font-serif text-2xl">
                    <button>The quick brown fox jumps over the lazy dog.</button>
                </div>
                <div className="flex justify-center p-2 m-2 text-2xl">
                    <button>The quick brown fox jumps over the lazy dog.</button>
                </div>
            </div>
        </div>
        {/* font color */}
        <div className="flex-col justify-center align-middle">
            <h2 className="flex justify-start m-3 text-cyan-800"
            style={{
                "font-family": "DynaPuff, serif",
                "font-optical-sizing": "auto",
                "font-weight": 200,
                "fontSize":"40px",
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 200"
              }}
            
            >Font Color :</h2>
            <div className="flex justify-center overflow-auto align-middle ">
            <div className="m-4">
                <button className="w-16 h-16 bg-black shadow-lg shadow-slate-500" onClick={() => setColor("black")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-red-800 shadow-lg shadow-slate-500" onClick={() => setColor("#991b1b")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-blue-700 shadow-lg shadow-slate-500" onClick={() => setColor("#1d4ed8")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-green-500 shadow-lg shadow-slate-500" onClick={() => setColor("#22c55e")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-slate-600 shadow-slate-500" onClick={() => setColor(" #475569")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-stone-500 shadow-slate-500" onClick={() => setColor("#78716c")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-white shadow-lg shadow-slate-500" onClick={() => setColor("#ffffff")}></button>
            </div>
            </div>
            <div className="flex justify-center">
            <div className="m-4">
                <button className="w-16 h-16 bg-orange-600 shadow-lg shadow-slate-500" onClick={() => setColor("#ea580c")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-yellow-500 shadow-lg shadow-slate-500" onClick={() => setColor("#eab308")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-lime-600 shadow-slate-500" onClick={() => setColor("#65a30d")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 bg-teal-600 shadow-lg shadow-slate-500" onClick={() => setColor("#0d9488")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-cyan-700 shadow-slate-500" onClick={() => setColor("#0e7490")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-sky-700 shadow-slate-500" onClick={() => setColor("#0369a1")}></button>
            </div>
            <div className="m-4">
                <button className="w-16 h-16 shadow-lg bg-violet-700 shadow-slate-500" onClick={() => setColor("#6d28d9")}></button>
            </div>
            </div>
        </div>
      </div>
    </div>
     {/* <div className="flex justify-center mt-20 align-middle">
        <div className="p-5 m-4 font-mono text-4xl font-bold text-white bg-blue-900 rounded-lg hover:bg-slate-500 hover:text-black">
            <button>SAVE</button>
        </div>
        <div className="p-5 m-4 font-mono text-4xl font-bold text-white bg-blue-900 rounded-lg hover:bg-slate-500 hover:text-black">
            <button>SHARE</button>
        </div>
    </div> */}
    </>
  );
};

export default Work;
