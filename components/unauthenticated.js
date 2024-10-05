import { signIn } from 'next-auth/react'

export default function Unauthenticated() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md text-center">
                <p className="text-2xl font-bold text-gray-800 mb-6">
                    You are not authenticated
                </p>
                <button 
                    onClick={() => signIn()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}