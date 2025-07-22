import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'heading.json');
  const headingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return NextResponse.json(headingData);
}