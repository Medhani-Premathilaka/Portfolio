import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");

  try {
    const fileBuffer = await fs.promises.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="medhani_premathilaka.pdf"`,
      },
    });
  } catch (err) {
    return new NextResponse("Not found", { status: 404 });
  }
}
