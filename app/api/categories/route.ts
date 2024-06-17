import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();
  const { categoryName, categoryDescription } = body.formData;

  try {
    // Check if user is authenticated
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    console.log("CATEGORIES_POST", categoryName, categoryDescription);

    // Check if category name is provided
    if (!categoryName) {
      return new NextResponse("Category name is required", { status: 400 });
    }

    // Check if category description is provided
    if (!categoryDescription) {
      return new NextResponse("Category description is required", {
        status: 400,
      });
    }

    // Create new category
    const category = await prismadb.category.create({
      data: {
        name: categoryName,
        description: categoryDescription,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("CATEGORIES_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
