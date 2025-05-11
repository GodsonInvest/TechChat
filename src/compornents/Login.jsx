import React, { useState } from 'react'
import { User, Lock } from 'lucide-react'
import '../styles/login.css'
import '../styles/bannerLogin.css'
import logo from '../assets/logo.svg'

function Login() {
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('UserName:', userName)
    console.log('Password:', passWord)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <div className="bg-slate-100 rounded-lg shadow-lg p-6 ">
        {/* Logo et titre */}
        <div className=' banner-login container mx-auto '> 
                <div className='banner-login  flex flex-row items-center  justify-center  '>
                    <img 
                     src={logo} 
                     alt="logo TechChat" 
                     className=' '
                     /> 
                    <div className='logo-name relative right-11 top-6  '>
                        <h1 className='font-bold'> <span>Tech</span>Chat</h1>
                    </div>
        
                </div>
        
            </div>

        {/* Titre Connexion */}
        <h1 className="text-center font-bold text-[#4630D9] text-2xl mb-6">
          Connexion
        </h1>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {/* Username */}
          <div className="w-5/6 md:w-full text-center md:text-start">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-500 mb-1 pl-1 pr-1"
            >
              Nom d'utilisateur
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-gray-300">
              <User className="text-[#4630D9]" size={20} />
              <input
                type="text"
                id="username"
                placeholder="@Bilal.tech"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full text-sm outline-none bg-transparent text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-5/6 md:w-full text-center md:text-start">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500 mb-1 pl-1"
            >
              Mot de passe
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-gray-300">
              <Lock className="text-[#4630D9]" size={20} />
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                className="w-full text-sm outline-none bg-transparent text-gray-700"
              />
            </div>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-5/6 md:w-full bg-[#4630D9] text-white py-2 rounded-md hover:bg-[#3724b5] transition"
          >
            Connexion
          </button>
        </form>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="souvenir"
              name="souvenir"
              className="text-[#4630D9] rounded"
            />
            <label htmlFor="souvenir" className="text-gray-500 text-sm">
              Se souvenir de moi
            </label>
          </div>
          <span className="text-gray-500 text-sm">
            Vous n'avez pas de compte ?{' '}
            <a href="#" className="text-[#4630D9] hover:underline">
              Inscription
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
