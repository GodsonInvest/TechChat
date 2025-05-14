import { useState} from "react";
import reactLogo from '../../assets/image.jpg'
import couverture from '../../assets/image2.jpg'

function Entete() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [open, setOpen] = useState(false)

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    const toggleOption = () => setOpen(!open)

    return (
        <div className="w-full mx-auto rounded-lg overflow-hidden">
            {/* Photo de couverture */}
            <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500 relative">
                <img
                    className="w-full h-full object-cover opacity-90"
                    src={couverture}
                    alt="Couverture"
                />
            </div>
            
            {/* Informations du profil*/}
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 p-6 relative mx-auto -mt-6 rounded-lg shadow-lg max-w-3xl">
                {/* Photo de profil */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <img
                        className="w-32 h-32 rounded-full border-4 border-white shadow-md"
                        src={reactLogo}
                        alt="Photo de profil"
                    />
                </div>
                
                {/* Nom et boutons d'action */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-center md:text-left">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Nom de l'utilisateur</h1>
                        <p className="text-sm text-gray-500">@nomutilisateur</p>
                    </div>
                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <button 
                            onClick={handleFollow}
                            className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                                isFollowing 
                                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                        >
                            {isFollowing ? 'Abonné' : 'Suivre'}
                        </button>
                        {/**Bouton option */}
                        <button
                            onClick={toggleOption}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                        {/**Option bouton */}
                        {open && (
                            <div className="absolute right-0 mt-12 bg-white shadow-md rounded-md z-10 w-56">
                              <ul className="py-2">
                                <li>
                                  <a className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700" href="#">
                                    Changer la photo de profil
                                  </a>
                                </li>
                                <li>
                                  <a className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700" href="#">
                                    Mettre à jour la bio
                                  </a>
                                </li>
                                <li>
                                  <a className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700" href="#">
                                    Ajouter une publication
                                  </a>
                                </li>
                                <li>
                                  <a className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700" href="#">
                                    Mise à jour des informations
                                  </a>
                                </li>
                                <li>
                                  <a className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700" href="#">
                                    Ajouter un réseau
                                  </a>
                                </li>
                              </ul>
                            </div>
                        )}

                    </div>
                </div>
                
                {/* Bio et statistiques */}
                <div className="mt-4 text-center">
                    <p className="text-gray-700 max-w-2xl mx-auto">Je suis xxx et je fais le developpement logiciel. Contacter moi pour de meilleure project et connexion.</p>
                    
                    <div className="mt-6 flex justify-center space-x-10">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-800">248</span>
                            <span className="text-sm text-gray-500">Abonnements</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-800">1,582</span>
                            <span className="text-sm text-gray-500">Abonnés</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-800">152</span>
                            <span className="text-sm text-gray-500">Publications</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entete;