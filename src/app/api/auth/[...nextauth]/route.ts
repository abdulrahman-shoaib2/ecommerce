import { authServices } from "@/services/authServices";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Please Enter Your Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Your Password" },

      },
      async authorize(credentials, req) {

        const response = await authServices.signIn(credentials?.email ?? "", credentials?.password ?? "");
        if (response.ok) {
          const user = {
            id: response.user.email,
            name: response.user.name,
            email: response.user.email,
            role: response.user.role,
            token: response.token

          }
          return user;

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
      if(session.user){
        session.user.role = token.role as string;
        session.user.token = token.token as string;

      }

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
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  }
})


export { handler as GET, handler as POST }