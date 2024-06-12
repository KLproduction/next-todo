import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import addTodo from "../actions/addTodos";
import deleteTodo from "../actions/deleteTodo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const prisma = new PrismaClient()

export default async function Home() {

  const todos = await prisma.todo.findMany()


  return (
    <MaxWidthWrapper>

      <div className=" flex flex-col items-center justify-center h-screen bg-gray-200 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">To Do List</h1>
        <form action={addTodo} className="flex justify-between mb-4 gap-3 w-full">
          <input name="title" type="text" placeholder="Add a new todo" className="form-input px-4 py-2 border rounded"/>
          <input name="content" type="text" placeholder="Add a new content" className="form-input px-4 py-2 border rounded"/>
          <Button 
          variant="outline"
          size="lg"
          type="submit"
          className="bg-red-400 text-white">
            Add Todo
          </Button>
        </form>
        <ul className="list-disc list-inside w-full">
          {todos.map((todo)=>{
            return(
              <li key={todo.id} className="flex justify-between items-center bg-white px-4 py-2 border-b last:border-b-0">
                <span>{todo.title}</span>
                <span>{todo.content}</span>
                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Button type="submit">Delete</Button>
                </form>
              </li>
            )
          })}
        </ul>
      </div>
    </MaxWidthWrapper>
  );
}
