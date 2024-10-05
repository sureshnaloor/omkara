import { signOut } from 'next-auth/react'

export default function Authenticated() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md">
                <p className="text-2xl font-bold text-gray-800 mb-6">
                    You are authenticated
                </p>

                <button 
                    onClick={() => signOut()}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                >
                    Sign out
                </button>
            </div>
        </div>
    )
}