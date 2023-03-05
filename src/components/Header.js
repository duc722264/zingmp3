import icons from '../util/icon';
import { Search } from './';

const { BsArrowLeft, BsArrowRight } = icons;

const Header = () => {
    return (
        <div className="h-[70px] px-[59px] text-white flex items-center justify-between">
            <div className="flex items-center gap-5 w-3/5">
                <div className="flex text-[#504a59] gap-5 ">
                    <span>
                        <BsArrowLeft size={24} />
                    </span>
                    <span>
                        <BsArrowRight size={24} />
                    </span>
                </div>
                <Search />
            </div>
            <div>đăng nhập</div>
        </div>
    );
};

export default Header;
