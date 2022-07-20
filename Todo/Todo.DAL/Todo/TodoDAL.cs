using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Todo.Entity.Todo;

namespace Todo.DAL.Todo 
{
    public class TodoDAL
    {
        public async Task<List<TodoDTO>> GetALL()
         {
            List<TodoDTO> l = new List<TodoDTO>();
            try
            {
                var mongoClient = new MongoClient("mongodb+srv://deepakjain:Aa123456@cluster0.qkqlpkb.mongodb.net/?retryWrites=true&w=majority");
                var database = mongoClient.GetDatabase("TodoDB");
                var collection = database.GetCollection<TodoDTO>("TodoList");

                var res = await collection.FindAsync(_ => true);

                foreach (var r in res.ToList())
                {
                    TodoDTO dto = new TodoDTO();
                    dto.ID = r.ID;
                    dto.Title = r.Title;
                    dto.Desc = r.Desc;
                    dto.IsActive = r.IsActive;
                    l.Add(dto);
                    }
                    //TodoDTO dto = new TodoDTO();
                    //dto.ID = "1";
                    //dto.Title = "tITLE";
                    //dto.Desc = "dESC";
                    //dto.IsActive = false;
                    //l.Add(dto);
                }
            catch (Exception ex)
            {
                Console.Write(ex.InnerException);
            }
           

            
            
            return l;

        }

        public async Task<List<TodoDTO>> AddTodo(TodoDTO todo)
        {
            List<TodoDTO> l = new List<TodoDTO>();
           
                var mongoClient = new MongoClient("mongodb+srv://deepakjain:Aa123456@cluster0.qkqlpkb.mongodb.net/?retryWrites=true&w=majority");
                var database = mongoClient.GetDatabase("TodoDB");
                var collection = database.GetCollection<TodoDTO>("TodoList");

                collection.InsertOne(todo);

                return await GetALL();


           
            }



    }
}
