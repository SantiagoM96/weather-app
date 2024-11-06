import Cloud from "@/ui/icons/FilledCloud"
import Sun from "@/ui/icons/Sun"

const Loader = () => {
    return (
        <div className="w-dvh h-dvh flex-center text-center bg-white">
            <Sun className="absolute left-1/2 translate-y-1/2 top-[45%] flex-shrink-0 w-16 h-16 sun" />
            <Cloud className="relative z-2 flex-shrink-0 w-24 h-24 text-[#e8e8e8]" />
                <div className="absolute top-[55%] z-1">
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                </div>
        </div>
    )
}

export default Loader