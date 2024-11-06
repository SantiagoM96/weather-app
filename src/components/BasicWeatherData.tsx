import SearchBar from './SearchBar'
import Menu from './Menu'
import { BasicWeatherDataProps } from '@/interfaces/show-weather/basicWetherDataProps.interface';

const BasicWeatherData = ({ basicData, setQuery }: BasicWeatherDataProps) => {
    return (
        <>
            <SearchBar setQuery={setQuery} />
            <Menu
                icon={basicData.icon}
                day={basicData.formattedLocalTime.day}
                hour={basicData.formattedLocalTime.time}
                temp={basicData.temp}
                temp_min={basicData.temp_min}
                temp_max={basicData.temp_max}
                city={basicData.name}
                country={basicData.country}
                details={basicData.details}
                pop={basicData.hourly[0].pop}
            />
        </>
    )
}

export default BasicWeatherData