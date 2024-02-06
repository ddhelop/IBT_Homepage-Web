'use server'

export const compare = async (username: string, password: string) => {
  if (
    username == (process.env.ADMIN_ID as unknown as string) &&
    password == (process.env.ADMIN_PASSWORD as unknown as string)
  ) {
    return true
  } else {
    return false
  }
}
