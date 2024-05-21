'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function create(data: string) {
    cookies().set({
        name: 'path',
        value: data,
    })
    redirect('/')
}