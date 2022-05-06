import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "997754770596-k00pb8ok3jviff87s20eanepop2belro.apps.googleusercontent.com",
      clientSecret: "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"
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});