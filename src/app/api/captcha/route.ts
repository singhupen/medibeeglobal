import { NextResponse } from 'next/server';
import svgCaptcha from 'svg-captcha';

export const dynamic = 'force-dynamic';

export async function GET() {
  const captcha = svgCaptcha.create({
    size: 5,
    ignoreChars: '0o1i',
    noise: 2,
    color: true,
    background: '#f9fafb',
  });

  return NextResponse.json({
    svg: captcha.data,
    text: captcha.text,
  });
}
