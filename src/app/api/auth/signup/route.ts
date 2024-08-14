import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: NextRequest) {
  if (req.method === "GET") {
    return NextResponse.json({
      message: "GET request to the signup route",
      success: true,
    });
  }

  //   Now getting the name,email and password from the request body
  const { name, email, password } = await req.json();
  
  // Checking if the email already exists in the database
  const user = await prisma.user.findUnique({ where: { email } });
  // If the email already exists, return an error message
  console.log("Moving to Hashing");
  if (user) {
    return NextResponse.json({ error: "User already exists", success: false });
  }
  //First hash the password
  const hashedPassword = await hash(password, 10);
  // If the email does not exist, create a new user

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  //Now return the new user
  console.log("Returing the user")
  return NextResponse.json({
    message: "User created",
    success: true,
    user: newUser,
  });
}
