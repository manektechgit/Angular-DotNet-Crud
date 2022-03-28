using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.DBContext;
using WebApplication2.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        readonly UserContext UserDetails;
        public UserController(UserContext userContext)
        {
            UserDetails = userContext;
        }


        [HttpGet]
        public IEnumerable<User> Get()
        {
            var data = UserDetails.User.ToList();
            return data;
        }
        //[HttpGet]
        //public IActionResult Get([FromQuery] Pagignation Pagignation)
        //{
        //    var data = UserDetails.User.ToList();
        //    return Ok(data);
        //}

        //public IEnumerable<User> Get(Pagignation pagignation)
        //{
        //    return FindAll()
        //        .OrderBy(on => on.Name)
        //        .Skip((pagignation.PageNumber - 1) * pagignation.PageSize)
        //        .Take(pagignation.PageSize)
        //        .ToList();
        //}

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var data = UserDetails.User.Find(id);
            return Ok(data);
        }
        [HttpPost]
        public IActionResult Post([FromBody] User obj)
        {
            //var data = UserDetails.User.Add(obj);

            //UserDetails.SaveChanges();
            try
            {
                if (ModelState.IsValid)
                {
                    var isEmailAlreadyExists = UserDetails.User.Any(x => x.UserEmail == obj.UserEmail);
                   
                    if (isEmailAlreadyExists)
                    {
                        ModelState.AddModelError("Email", "User with this email already exists");
                    }
                    User newobj = new User();
                    newobj.UserName = obj.UserName;
                    newobj.UserEmail = obj.UserEmail;
                    newobj.UserPassword = obj.UserPassword;

                    DateTime UserDOB = new DateTime();
                    string strDate = UserDOB.ToString("dd/MM/yyyy");
                    newobj.UserDOB = obj.UserDOB;

                    UserDetails.User.Add(newobj);
                    UserDetails.SaveChanges();
                    return Ok();
                }
            }
            catch (Exception ex)
            {

                return StatusCode(HttpContext.Response.StatusCode, " email already exists");
            }
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User obj)
        {
            try
            {


                if (ModelState.IsValid)
                {
                    var isEmailAlreadyExists = UserDetails.User.Any(x => x.UserEmail == obj.UserEmail);
                    if (isEmailAlreadyExists)
                    {
                        ModelState.AddModelError("Email", "User with this email already exists");
                    }
                    var data = UserDetails.User.Update(obj);
                    UserDetails.SaveChanges();
                    return Ok();
                }
               
            }
            catch (Exception ex)
                {

                return StatusCode(HttpContext.Response.StatusCode, " email already exists");
            }
            return Ok();

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = UserDetails.User.Where(a => a.UserId == id).FirstOrDefault();
            UserDetails.User.Remove(data);
            UserDetails.SaveChanges();
            return Ok();

        }
    }
}
