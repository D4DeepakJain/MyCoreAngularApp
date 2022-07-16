using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Todo.Entity.Todo
{
    [BsonIgnoreExtraElements]
    public class TodoDTO
    {
        #region properties
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ID { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("desc")]
        public string Desc { get; set; }

        [BsonElement("isActive")]
        public bool IsActive { get; set; }

        #endregion
    }
}
