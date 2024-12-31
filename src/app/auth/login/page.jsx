"use client"
import { useForm } from "react-hook-form"
import {signIn} from "next-auth/react"
import Link from "next/link";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function LogInPage() {

    const {register,handleSubmit ,formState : {errors}} = useForm();
    const router = useRouter()
    const [error, setError] = useState(null);

    const onSubmit = handleSubmit(async (data)=> {
        const res = await signIn('credentials', {email: data.email, password: data.password, redirect: false});

        if(res.error) {
            setError(res.error);
    
        }else {
            router.push("/dashboard")
        }
    })

    return (
        <div id="gradient" className="flex justify-center items-center w-screen h-screen min-w-96 ">
            <Link className='absolute top-10 left-10' href={"/"}><KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/></Link>
                <div id="gradient" className="border border-gray-300 p-14 rounded shadow-lg relative">
                {error && <div className="text-center w-full bg-red-300 text-red-800 rounded-lg shadow-sm p-2 mb-5"><p className="">{error}</p></div>}
                    <h3 className="text-lg text-center mb-10">Log In</h3>
                <form onSubmit={onSubmit} className="flex flex-col gap-9">
                    <div className="flex flex-col relative">
                    <label htmlFor="username" className="text-sm">Email</label>
                    <input className="p-1 pr-12 rounded border text-letra placeholder:text-xs" type="email" placeholder="Example@gmail.com" {...register("email", {required: {value: true,message: "Email is required"}})}/>
                    {errors.email && <p className="text-red-500 absolute -bottom-6">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input className="p-1 pr-12 rounded border text-letra placeholder:text-xs" type="password" placeholder="*********" {...register("password", {required: {value: true,message: "Password is required"}})}/>
                    {errors.password && <p className="text-red-500 absolute -bottom-6">{errors.password.message}</p>}
                    </div>
                    <button className="bg-primary mt-5 text-letra py-1 w-full self-center rounded shadow-md" type="submit">Log In</button>
                    <Link href="/auth/register" className="text-center text-sm hover:cursor-pointer">Don't have an account? Sign Up</Link>
                </form>
                </div>
        </div>
    )
}