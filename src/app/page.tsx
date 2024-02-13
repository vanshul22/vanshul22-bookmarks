import AllBookMark from "@/components/base/AllBookMark";
import BookMarkEdit from "@/components/base/BookMarkEdit";
import Sidebar from "@/components/base/Sidebar";
import { getCurrentUser } from "@/lib/auth";
import { User } from "firebase/auth";
import { redirect } from 'next/navigation';


export default async function Home() {

  // Checking the current loggedin user 
  const user = await getCurrentUser() as User | null;
  if (!user) return redirect("/auth/signin") // Navigate to the home page;

  return (
    <main>

      <div className="flex">
        <Sidebar />
        <AllBookMark />
        <BookMarkEdit />
      </div>
    </main>
  );
}

{/* <Button variant="default" className='bg-gradient-to-br from-purple-700 to-pink-500 hover:from-purple-600 hover:to-pink-400'>Button</Button> */ }