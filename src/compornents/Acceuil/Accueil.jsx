import { Home, MessageCircle, BellDot, Menu, User, Settings, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Accueil() {
    const [open, setOpen] = useState(false)

    const Ouvrir = () => {
        setOpen(!open)
    }

    {/**    useEffect()*/}

    return (
        <div className='flex items-center justify-center bg-blue-500 p-5'>
            <nav className='flex w-15 gap-10'>
                <Home color='white'/>
                <MessageCircle color='white'/>
                <BellDot color='white'/>
                <button 
                    onClick={Ouvrir}
                    className=''
                >
                    <Menu color='white'/>
                </button>

                {open && (
                    <div className="absolute right-0 mt-12 bg-white shadow-md rounded-md z-10 w-56">
                        <ul className="py-2 p-2">
                            <Link 
                                to="/profil"
                                className='block flex item-center gap-2 my-8 hover:text-sky-300'
                            >
                                <User className='h-5 w-5'/>
                                Profil
                            </Link>
                            <Link
                               to=""
                               className='block flex item-center gap-2 my-8 hover:text-sky-300'
                            >
                                <Settings className='h-5 w-5'/>
                                Parametres
                            </Link>
                            <Link 
                                to="/login"
                                className='block flex item-center gap-2 hover:text-red-500 my-8'
                            >
                                <LogOut className='h-5 w-5'/>
                                Deconnection
                            </Link>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Accueil
