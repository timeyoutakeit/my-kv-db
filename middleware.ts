import { NextResponse } from 'next/server';
import kv from '@vercel/kv';
 
export const config = { matcher: '/user-info' };
 
export async function middleware() {
  const greeting = await kv.hgetall('user:me');
  return NextResponse.json(greeting);
}