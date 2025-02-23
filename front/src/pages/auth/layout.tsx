import { Link, Outlet } from 'react-router-dom';
import { useHttpQuery } from '../../helpers/useHttp';
import { IResponse } from '../../helpers/types';
export const Layout = () => {
    const links = [
        { name: 'Home', href: '/profile' },
        { name: 'Settings', href: '/profile/settings' },
        { name: 'Followers', href: '/profile/followers' },
        { name: 'Followings', href: '/profile/followings' },
        { name: 'Messages', href: '/profile/messages' },
    ];
    const {data,loading,error} = useHttpQuery<IResponse>("/verify")
    const{logout,error???}
    // if(loading) {
    //     return <p>Loading...</p>
    // }
    

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <nav className="bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-blue-400">AraratGram</h1>
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.href}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="container mx-auto px-4 py-6">
               
               <Outlet 
               context={{user:data.user}}/>
            </main>
        </div>
    );
};