'use client'

import Header from "./Header";
import Sidebar from "./Sidebar";
import RTKProvider from "@/state/ReduxProvider";
import { useSelector } from "react-redux";
import DashboardFooter from "@/components/DashboardFooter/Footer";

export default function ClientLayout({ children }) {

    const adminSidebar = useSelector(state => state.rtkreducer.adminSidebar);

    return (
        <RTKProvider>
            <div className={`w-full flex`}>
                {adminSidebar && (
                    <div className={`hidden md:flex`}>
                        <Sidebar />
                    </div>
                )}

                <div className={`w-full ${adminSidebar ? 'md:ml-60' : ''}`}>
                    <div className="w-full mt-16">
                        <Header />
                    </div>
                    <main className="w-full min-h-screen bg-gray-100 dark:bg-neutral-900 transition-all duration-500">
                        {children}
                        <div className="w-full mt-3">
                            <DashboardFooter />
                        </div>
                    </main>
                </div>
            </div>
        </RTKProvider>
    );
}
