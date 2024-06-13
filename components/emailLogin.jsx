'use server'

import { signIn } from "@/auth"

export async function doCredentialLogin(formData){
    try{
        const response = await signIn("credentials",{
            redirectTo:false,
            email:formData.get('email'),
            password: formData.get('password')
        });
        return response
    }catch(e){
        throw new Error (e)
    }
}