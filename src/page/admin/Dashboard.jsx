
import Header from "./Header"
import Sidebar from "./Sidebar"

function Dashboard() {
    return (
        <>
            <div  className="">
                <div className="flex min-h-screen bg-slate-900 text-white">
                    <Sidebar />

                    <div className="flex-1 flex flex-col">
                        <Header />

                        <main className="flex-1 p-6 lg:p-8 space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
