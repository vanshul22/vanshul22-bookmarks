import React from 'react'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from '@/setup/firebase';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link';

type Props = {}

const SignInPage = (props: Props) => {
  // const userCredential = await signInWithEmailAndPassword(auth, "vkvanshulkesharwani54@gmail.com", "1234567890");
  // console.log(userCredential.user, "userCredential");
  return (
    <div>
      <div
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("/nature-bg.jpg")'
        }}
      >
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <Image src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width={150} height={150} alt="instagram" />
              <h1 className="mb-2 text-2xl">Booky Manager</h1>
              <span className="text-gray-300">Enter Login Details</span>
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input className="rounded-3xl border border-black bg-[#3f5c22] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-400 shadow-lg outline-none backdrop-blur-md" type="email" name="email" placeholder="email@company.com" />
              </div>
              <div className="mb-4 text-lg">
                <input className="rounded-3xl border border-black bg-[#3f5c22] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-400 shadow-lg outline-none backdrop-blur-md" type="password" name="password" placeholder="*********" />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <Button type='submit' className='rounded-3xl bg-black hover:bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300'>Sign In</Button>
              </div>
            </form>
            <Separator className='my-5 bg-opacity-30 bg-green-300' />
            <div className=" flex justify-between text-lg ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Remember me </label>
              </div>
              <Link className='text-sm font-medium leading-none' href="/auth/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignInPage;