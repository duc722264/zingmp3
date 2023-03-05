import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components';

function Public() {
    return (
        <div className="w-full flex bg-[#170f23]">
            <SidebarLeft />
            <div className="flex-auto">
                <Outlet />
            </div>
            <SidebarRight />
        </div>
    );
}

export default Public;
