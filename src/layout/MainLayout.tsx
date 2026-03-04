import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const MainLayout = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-slate-100 p-2 md:p-4"> 
            
            <div className="flex flex-col md:flex-row w-full bg-white rounded-3xl md:rounded-4xl shadow-sm 
            border border-slate-200 overflow-hidden h-full">

                <SideBar />

                <main className="flex-1 h-full overflow-hidden flex flex-col order-1 md:order-2">
                    <div className="flex-1 overflow-y-auto p-4 md:py-8 md:px-20 custom-scrollbar">
                        <div className="w-full h-full">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainLayout;