import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const transactions = await prisma.transaction.findMany({
    orderBy: {date: 'desc'},
  })
  return NextResponse.json(transactions);
};

export async function POST(request: Request) {
  const body = await request.json();
  const created = await prisma.transaction.create({
    data: {
      description: body.description,
      method: body.method,
      amount: body.amount,
      date: new Date(body.date),
    },
  });
  return NextResponse.json(created, { status: 201 });
}