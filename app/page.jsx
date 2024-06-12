import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import addTodo from "./actions/addTodos";
import deleteTodo from "./actions/deleteTodo";

const prisma = new PrismaClient()

export default async function Home() {

  const todos = await prisma.todo.findMany()


  return (
    <main className=" flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1>Home</h1>
    </main>
  );
}
