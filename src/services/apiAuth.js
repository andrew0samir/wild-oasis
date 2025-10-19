import Supabase from "./supabase";

export async function login({ email, password }) {

    const { data, error } = await Supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw new Error(error.message);

    return data;

}