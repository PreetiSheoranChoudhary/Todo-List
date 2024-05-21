
export default async function handler(req, res) {
    try {
      const data = await fetch('http://localhost:3032/task',{cache :"no-store"}); 
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }

  export const addTodo = async (task)=> {
    const req = await fetch(`http://localhost:3032/task`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }
    )
  const newTodo = await req.json();
  return newTodo;
  }
  
  