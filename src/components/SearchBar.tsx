"use client";

import { useState } from "react";
import Search from "@/ui/icons/Search";
import Cancel from "@/ui/icons/Cancel";
import MyLocation from "@/ui/icons/MyLocation";
import { SearchBarProps } from "@/interfaces/show-weather/searchBarProps.interface";

const SearchBar = ({ setQuery }: SearchBarProps) => {
  const [city, setCity] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city) {
      setQuery({ city });
    }
    setCity("");
  };

  const handleCancel = () => {
    setCity("");
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude.toString(), lon: longitude.toString() });
      });
    }
  };

  return (
    <form className="flex items-center justify-start w-full gap-2 rounded-full bg-[#f6f6f8] p-2" onSubmit={handleSearch}>
      <Search className="flex-shrink-0 w-6 h-6" />
      <input
        type="text"
        name="city"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Search for places ..."
        className="bg-[#f6f6f8] appearance-none border-none outline-none w-full"
        autoComplete="off"
      />
      {city !== "" && <Cancel className="flex-shrink-0 w-6 h-6 cursor-pointer" onClick={handleCancel} />}
      <MyLocation className="flex-shrink-0 w-6 h-6 cursor-pointer" onClick={handleLocationClick} />
    </form>
  );
};

export default SearchBar;