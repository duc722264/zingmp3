import logo from '../assets/logo.svg';
import { sidebarMenu } from '../util/menu';
import { NavLink } from 'react-router-dom';

const notActive =
    'py-2 px-[25px] flex items-center gap-3 font-bold text-[#c3c2c4] border border-transparent hover:text-[#FFF] transition-all duration-800 ease-linear';

const activeStyle =
    'py-2 px-[25px] flex items-center gap-3 font-bold text-[#FFF] border border-transparent border-l-[#9b4de0] transition-all duration-800 ease-linear bg-[#ffffff1a]';

const SidebarLeft = () => {
    return (
        <div className="w-[240px] flex-none bg-[#221a2d]">
            <div className="py-[15px] pl-[25px] pr-7">
                <img className="w-[120px] h-10 hover:opacity-90 cursor-pointer" src={logo} alt="logo" />
            </div>
            <div className="mb-[15px]">
                {sidebarMenu.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) => (isActive ? activeStyle : notActive)}
                    >
                        {item.icon}
                        <span className="text-[13px]">{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
