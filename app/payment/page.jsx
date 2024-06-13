import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Payment = () => {
  return (
    <div className=' flex flex-col justify-center items-center my-10 gap-5'>
        <h1>Payment</h1>
        <Button asChild>
            <Link href="https://buy.stripe.com/test_5kA8yP4Dg7tZc7u8ww">
            Pay now
            </Link>
        </Button>
    </div>
  )
}

export default Payment