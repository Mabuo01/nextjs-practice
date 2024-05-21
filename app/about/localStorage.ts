'use client'


export function Storage() {
    if (typeof window !== 'undefined') return {}
    const saved = localStorage.getItem('data')
  return saved ? JSON.parse(saved) : {}
}