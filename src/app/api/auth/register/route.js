import { NextResponse } from "next/server";
import db from "@/lib/db"
import bcrypt from "bcryptjs"


export async function POST(request) {
    try {
        const data = await request.json()

    const userEmailFound = await db.user.findUnique({where: {email: data.email}})
    if (userEmailFound) {
        return NextResponse.json({error: "Email already exists"}, {status: 400})
    }

    const userNameFound = await db.user.findUnique({where: {username: data.username}})
    if (userNameFound) {
        return NextResponse.json({error: "Username already exists"}, {status: 400})
    }
    
    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await db.user.create({data: {username: data.username, email: data.email, password: hashedPassword}})

    const {password, ...user} = newUser

    return NextResponse.json(user)
    }
    catch(error) {
        return NextResponse.json({message : error.message}, {status: 500})
    }
}