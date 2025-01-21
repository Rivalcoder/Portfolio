

export default function Procard(props) {

    const handleRedirect = () => {
        window.location.href = "https://rivalcoder.cloud";
      };


    return (
        <div onClick={handleRedirect} className="bg-white text-gray-800 rounded-xl p-6 shadow-lg  hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-full max-sm:h-72 max-lg:h-44 overflow-hidden">
            <h1 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                {props.name}
            </h1>
            <div className="flex flex-row gap-6 items-center">
                <img
                    src={props.img}
                    alt="Image not available"
                    className="h-20 w-20 bg-transparent rounded-lg object-cover"
                />
                <p className="text-lg text-gray-700 flex-1">
                    {props.data}
                </p>
            </div>
        </div>
    );
}
