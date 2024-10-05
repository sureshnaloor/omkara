import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function UserHome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if no session exists
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Information */}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-sky-100 shadow-md rounded-lg p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <h2 className="font-semibold text-center text-teal-900 text-[12px] mb-4">United in Sacred Rites: Connect, Share, and Experience Hindu Puja Together.</h2>
            <CldImage
              src="om/zuffhowlgwycbjljvld5" // Public ID of the Cloudinary image
              width={200}
              height={200}
              alt="meditation"
              effect="sepia"
              quality={80}
              radius="max"
              crop="fill" // Cloudinary transformation (e.g., crop, resize)
            />
          
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="text-[12px] italic tracking-widest">
              "Welcome to a transformative online platform that bridges
              distances and brings families closer through the sacred traditions
              of Hinduism."
            </p>
            <hr className="border-1 border-teal-900 mb-2" />
            <p className="text-[10px] font-semibold text-teal-900 tracking-widest">
              Embrace tradition, connect with your roots, and create lasting
              memories as you participate in Hindu pujas and rituals like
              never before, all within a digital realm that transcends
              physical limitations."
            </p>
          </div>
        </div>

        {/* Apply the same styling to the other card elements */}
        <div className="bg-teal-100 shadow-md rounded-lg p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <h2 className="font-semibold text-center text-teal-900 text-[12px] mb-4">Guided Rituals (Pujas, homam, meditation).</h2>
            <CldImage
              src="om/ggztjhor8gbkwesud7oa" // Public ID of the Cloudinary image
             
              alt="meditation"
              effect="sepia"
              width={200}
              height={200}
              quality={80}
              
              crop="fill" // Cloudinary transformation (e.g., crop, resize)
            />
          
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="text-[12px] italic tracking-widest">
              "Feel the transformative power of these ancient practices, all from the comfort of your own space."
            </p>
            <hr className="border-1 border-teal-900 mb-2" />
            <span className="text-[10px] font-semibold text-teal-900 tracking-widest">
              Our guided rituals feature serves as your personal spiritual companion, offering a sense of guidance and support as you embark on your spiritual journey. Let the rituals become a regular part of your life, nurturing your soul and fostering a deeper connection with your heritage."
            </span>
          </div>
        </div>

        <div className="bg-green-100 shadow-md rounded-lg p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <h2 className="font-semibold text-center text-teal-900 text-[12px] mb-4">Pilgrimage, Puja and meditation scheduler.</h2>
            <CldImage
              src="om/mssgudlvcvmgqx5fxc1q" // Public ID of the Cloudinary image
              width={200}
              height={200}
              alt="meditation"
              effect="sepia"
              quality={80}
              radius="max"
              crop="fill" // Cloudinary transformation (e.g., crop, resize)
            />
          
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="text-[12px] italic tracking-widest">
              "Unites spiritual seekers by helping individuals reconnect with their inner selves and their spiritual community through shared rituals, meditation, and sacred journeys."
            </p>
            <hr className="border-1 border-teal-900 mb-2" />
            <span className="text-[10px] font-semibold text-teal-900 tracking-widest">
              Schedules, reminds, and organizes rituals, meditation, and pilgrimages. We strive to cultivate mindfulness, foster unity, and encourage growth by sharing experiences and promoting a deeper connection to one's faith and inner peace."
            </span>
          </div>
        </div>

        <div className="bg-yellow-100 shadow-md rounded-lg p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <h2 className="font-semibold text-center text-teal-900 text-[12px] mb-4">Learning resources (Vedas, Upanishads, Puranas, Itihasas, Shlokas).</h2>
            <CldImage
              src="om/f0cmtw5dbubexyzppoed" // Public ID of the Cloudinary image
              width={200}
              height={200}
              alt="meditation"
              effect="sepia"
              quality={80}
              radius="max"
              crop="fill" // Cloudinary transformation (e.g., crop, resize)
            />
          
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="text-[12px] italic tracking-widest">
              "To become the leading source of timeless wisdom, guiding spiritual seekers on a journey of self-discovery and enlightenment through the rich teachings of Vedas, Upanishads, Puranas, and Itihasas, making ancient knowledge accessible and relevant for modern life."
            </p>
            <hr className="border-1 border-teal-900 mb-2" />
            <span className="text-[10px] font-semibold text-teal-900 tracking-widest">
              "Our mission is to preserve and share the profound teachings of ancient scriptures by providing comprehensive learning resources, including Vedas, Upanishads, Puranas, and more. Through our app, we aim to offer structured learning paths, authentic translations, and deep insights to help individuals embrace spiritual wisdom, foster personal growth, and strengthen their connection to the divine."
            </span>
          </div>
        </div>

        <div className="bg-amber-100 shadow-md rounded-lg p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <h2 className="font-semibold text-center text-teal-900 text-[12px] mb-4">Ishta Devtas/ Kula deivams/ Adimakkavu</h2>
            <CldImage
              src="om/t3ysu7svdprndvx73vmo" // Public ID of the Cloudinary image
              width={200}
              height={200}
              alt="meditation"
              effect="sepia"
              quality={80}
              radius="max"
              crop="fill" // Cloudinary transformation (e.g., crop, resize)
            />
          
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="text-[12px] italic tracking-widest">
              "To deepen personal and ancestral connections with the divine by helping individuals honor and understand their Ishta Devtaas and Kula Deivams, creating a sacred space for devotion, tradition, and spiritual growth."
            </p>
            <hr className="border-1 border-teal-900 mb-2" />
            <span className="text-[10px] font-semibold text-teal-900 tracking-widest">
              "Our mission is to provide a platform where individuals can discover, learn about, and engage with their Ishta Devtaas and Kula Deivams. Through personalized guidance, rituals, and stories, we aim to nurture a meaningful relationship with the divine, preserving family traditions while fostering individual spiritual journeys."
            </span>
          </div>
        </div>

        <div className="bg-orange-100 shadow-md rounded-lg p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <h2 className="font-semibold text-center text-teal-900 text-[12px] mb-4">Temples in India (Locations, contacts, features and Events).</h2>
            <CldImage
              src="om/esfphmeax1shrofhjo1l" // Public ID of the Cloudinary image
              width={200}
              height={200}
              alt="meditation"
              effect="sepia"
              quality={80}
              radius="max"
              crop="fill" // Cloudinary transformation (e.g., crop, resize)
            />
          
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="text-[12px] italic tracking-widest">
              "To be the ultimate guide for discovering and connecting with the sacred temples of India, offering spiritual seekers a deeper understanding of the divine through the exploration of holy sites, traditions, and rituals."
            </p>
            <hr className="border-1 border-teal-900 mb-2" />
            <span className="text-[10px] font-semibold text-teal-900 tracking-widest">
              "Our mission is to create a comprehensive platform that provides detailed information about temples across India, including locations, contacts, features, and events. We aim to make spiritual journeys and pilgrimages easier to plan and more enriching, while fostering a connection with the divine through a deeper appreciation of India's rich temple heritage."
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <div className="flex justify-between">
          <p className="mb-2">Email: {session.user.email}</p>
          <Link href="/profile" className="text-blue-600 hover:underline">
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <ul className="flex justify-between">
          <li>
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              Go to Dashboard
            </Link>
          </li>
          <li>
            <Link href="/settings" className="text-blue-600 hover:underline">
              Account Settings
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                /* Add logout functionality */
              }}
              className="text-red-600 hover:underline"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
