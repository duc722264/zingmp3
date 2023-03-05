import React from 'react';
import icons from '../util/icon';

const { IoIosSearch } = icons;

const Search = () => {
    return (
        <div className="rounded-[20px] w-full relative">
            <input
                type="text"
                className="outline-none bg-[#2f2739] py-[5px] border-radius-inherit pl-10 h-10 w-full text-[#dadada] leading-10 placeholder:text-[#dadada] text-[15px] "
                placeholder="Tìm kiếm bài hát,nghệ sĩ,lời bài hát..."
            />
            <span className="absolute top-1/2 left-2 translate-y-[-50%]  cursor-pointer text-[#dadada]  hover:opacity-80">
                <IoIosSearch size={26} />
            </span>
        </div>
    );
};

export default Search;
