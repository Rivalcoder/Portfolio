export default function Skills(props) {
    return (
      <div className="w-44 rounded-2xl bg-slate-100 text-black flex flex-col h-44 m-4 justify-center items-center text-base font-medium hover:scale-105 transition-all duration-300">
        <div className="text-4xl mb-2"><p>{props.img}</p></div>
        <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-1 mt-3">{props.head}</h1>
        {props.message ?<h1 className="text-md text-gray-600">{props.message}</h1> :""}
        </div>
      </div>
    );
  }
  