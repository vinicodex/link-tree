import Image from "next/image";

export default function Button(props) {

    return(
        <div className="flex justify-center mt-16">
          <a href={props.link} className="flex justify-center w-full h-full" target="_blank">
          <Image src={props.img} alt={props.alt} className="w-6 h-6 absolute left-16 mt-3 ml-4 animate-pulse" width={24} height={24}/>
            <button className="py-2 px-5 bg-slate-200 font-white rounded-full shadow-md hover:bg-slate-100 hover:text-black focus:outline-none focus:ring focus:ring-slate-800 focus:ring-opacity-75 w-3/4 h-12">
              {props.text}
            </button>
          </a>
        </div>
    );
  }
  