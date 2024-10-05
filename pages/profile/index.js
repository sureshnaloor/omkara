import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Authenticated from '../../components/authenticated'
import Unauthenticated from '../../components/unauthenticated'

function ProfilePage() {
  const { data: session, status } = useSession()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
            Home
          </Link>
          {status === 'authenticated' && (
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{session.user.name}</span>
              <button 
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Sign out
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {status === 'loading' && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-xl font-semibold">Loading...</div>
          </div>
        )}

        {status === 'authenticated' && <Authenticated />}
        {status === 'unauthenticated' && <Unauthenticated />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default ProfilePage

