using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Model
{
    public class User
    {

        [Key]
        public int? UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public DateTime UserDOB { get; set; }
        //public string UserDOB { get; set; }
    }
}
