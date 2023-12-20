import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToMongoDB } from "@/utils/database";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const activeUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = activeUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToMongoDB();
        // check for already existing user
        const userExist = await User.findOne({
          email: profile.email,
        });
        // if not, create new user
        if (!userExist) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
