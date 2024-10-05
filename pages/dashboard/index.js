import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Sun, Moon, Home, User } from 'lucide-react'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

export default function Dashboard() {
    const { data: session, status } = useSession()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Header Nav */}
            <nav className="bg-white dark:bg-gray-800 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mr-6">
                                <div className="bg-teal-500 p-2 rounded-full mr-2">
                                    <Home size={20} className="text-white" />
                                </div>
                                <span className="text-[14px] font-bold">Home</span>
                            </Link>
                            <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                                Dashboard
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            {status === 'authenticated' ? (
                                <>
                                    <div className="flex items-center space-x-2">
                                        {session.user.image ? (
                                            <Image
                                                src={session.user.image}
                                                alt="Profile"
                                                width={32}
                                                height={32}
                                                className="rounded-full"
                                            />
                                        ) : (
                                            <div className="bg-gray-300 dark:bg-gray-600 rounded-full p-2">
                                                <User size={20} className="text-gray-600 dark:text-gray-300" />
                                            </div>
                                        )}
                                        <span className="text-[14px] text-gray-700 dark:text-gray-300">{session.user.name}</span>
                                    </div>
                                    <button
                                        onClick={() => signOut()}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[14px]"
                                    >
                                        Sign out
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => signIn()}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[14px]"
                                >
                                    Sign in
                                </button>
                            )}
                            {mounted && <ThemeToggle />}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Dashboard Content</h2>
                    {status === 'authenticated' ? (
                        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    User Information
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                                    Personal details and application.
                                </p>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700">
                                <dl>
                                    <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                            Full name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                            {session.user.name || 'N/A'}
                                        </dd>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                            Email address
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                            {session.user.email}
                                        </dd>
                                    </div>
                                    {/* Add more user details here if available */}
                                </dl>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <p className="text-gray-600 dark:text-gray-300">Please sign in to view your dashboard.</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}