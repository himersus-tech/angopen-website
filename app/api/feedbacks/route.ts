import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  try {
    const res = await axios.get(`${API_URL}feedback/list`);
    return NextResponse.json(res.data, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status ?? 500,
      });
    }
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await axios.post(`${API_URL}feedback/create`, body);
    return NextResponse.json(res.data, { status: 201 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status ?? 500,
      });
    }
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
