using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Todo.DAL.Todo;
using Todo.Entity.Todo;

namespace Todo.BLL.Todo
{
    public class TodoBL
    {
        public Task<List<TodoDTO>> GetAll()
        {
            TodoDAL dal = new TodoDAL();

            return dal.GetALL();
        }

        public Task<List<TodoDTO>> AddTodo(TodoDTO todo)
        {
            TodoDAL dal = new TodoDAL();

            return dal.AddTodo(todo);
        }

    }
}
