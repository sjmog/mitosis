import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET
  },
  callbacks: {
    async redirect(url, baseUrl) { return "/" }
  }
})
