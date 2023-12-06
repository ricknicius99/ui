export async function post(todo: any){
    await fetch('http://localhost:8000/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "todo": todo,
            "completed": false
        })
    })
}