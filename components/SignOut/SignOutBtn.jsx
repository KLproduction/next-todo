'use client'

import { Button } from "@/components/ui/button"
import SignOut from "./SignOut"




const SignOutBtn =  () => {

      
  return (
    <Button onClick={()=>SignOut()}>
      SignOut
    </Button>
  )
}

export default SignOutBtn