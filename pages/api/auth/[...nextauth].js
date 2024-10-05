import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn:'/auth/signin',
  },
  
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30 // 30 days
  },
};
export default NextAuth(authOptions);
