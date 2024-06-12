"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addTodo(formData) {
  let title = formData.get("title");
  let content = formData.get("content");

  try {
    if (!title) throw new Error("title needed!");
    await prisma.todo.create({
      data: {
        title,
        content,
      },
    });
    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
}
