'use client'

import { create } from '@/app/about/actions'

export default function Button() {

    const handleClick = async () => {
        await create('/about')
    }
    
    return <button onClick={handleClick}>Server action: create Cookie</button>
}