import { Query } from "../search-weather/query.interface";

export interface SearchBarProps {
    setQuery: React.Dispatch<React.SetStateAction<Query | null>>;
}
