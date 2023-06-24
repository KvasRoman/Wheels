import { supabase } from ".."

class AuthService {
  // when signing-up user, pass object with email, password, name, surname, phone
  async registerWithEmailAndPassword ({ email, password, ...rest }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          ...rest,
        }
      }
    })

    if (error) {
      throw error
    }

    return data
  }

  async loginWithEmailAndPassword (payload) {
    const { data, error } = await supabase.auth.signInWithPassword(payload)

    if (error) {
      throw error
    }

    return data
  }

  async logOut () {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }
  }

  async loadUser () {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      throw error
    }

    return user
  }
}

export const authService = new AuthService()