import { VisibilityStatusProps } from "@/interfaces/show-weather/visibilityStatusProps.interface"

const VisibilityStatus = ({ visibility, message }: VisibilityStatusProps) => {
    return (
        <div className="card-status">
            <h3>Visibility</h3>
            <div className="flex justify-center flex-col gap-4 h-full">
                <p className="font-medium text-5xl">{visibility} <span className="text-base">km</span></p>
                <span className="font-medium">{message}</span>
            </div>
        </div>
    )
}

export default VisibilityStatus