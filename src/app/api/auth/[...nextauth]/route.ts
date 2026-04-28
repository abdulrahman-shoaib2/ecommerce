import { authServices } from "@/services/authServices";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Your Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Your Password" },

      },
      async authorize(credentials) {
        const res = await authServices.signIn(credentials?.email ?? "", credentials?.password ?? "");
        if (res.message == "success") {
          const user = {
            id: res.user.email,
            name: res.user.name,
            email: res.user.email,
            role: res.user.role,
            token: res.token
          }
          return user
        } else {
          return null
        }


      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role as string;
      session.user.token = token.token as string;
      // if (session.user) {
      // }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        token.role = user.role;
      }
      return token;
    }
  },
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    strategy: 'jwt',
  }
})


export { handler as GET, handler as POST }