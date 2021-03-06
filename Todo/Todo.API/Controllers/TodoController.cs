using Microsoft.AspNetCore.Mvc;
using Todo.BLL.Todo;
using Todo.Entity.Todo;

namespace Todo.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : Microsoft.AspNetCore.Mvc.ControllerBase
    {

        public TodoController()
        {

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            TodoBL bl = new TodoBL();
            var data = bl.GetAll();
            return Ok(data.Result);
        }

        [HttpPost]
        public IActionResult AddTodo(TodoDTO todo)
        {
            TodoBL bl = new TodoBL();
            var data = bl.AddTodo(todo);
            return Ok(data.Result);
        }


    }
}
