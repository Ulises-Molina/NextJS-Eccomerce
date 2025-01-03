import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db"
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "********" },
            },
            secret: process.env.NEXTAUTH_SECRET,
            async authorize(credentials,req){
                
                const userFound = await db.user.findUnique({where: {email: credentials.email}})

                if(!userFound) throw new Error("Email not found")

                const matchPassword =  await bcrypt.compare(credentials.password, userFound.password)

                if (!matchPassword) throw new Error("Incorrect password")

                return {
                    id: userFound.id,
                    name : userFound.username,
                    email: userFound.email
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login",
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }