export default function Button(props) {

    return(
        <div className="flex justify-center mt-10">
            <img src={props.img} alt={props.alt} className="w-8 h-8 absolute left-16 mt-2 ml-2"/>
            <button class="py-2 px-5 bg-slate-200 font-white rounded-full shadow-md hover:bg-slate-400 hover:text-white focus:outline-none focus:ring focus:ring-slate-800 focus:ring-opacity-75 w-3/4 h-12">
              {props.text}
            </button>
        </div>
    );
  }
  