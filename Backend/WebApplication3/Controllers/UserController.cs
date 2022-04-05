using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.DBContext;
using WebApplication3.Model;

namespace WebApplication3.Controllers
{
    //[Authorize]
    //[Route("api/[controller]")]
    //[ApiController]

    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        readonly UserContext UserDetails;
        public UserController(UserContext userContext)
        {
            UserDetails = userContext;
        }


        [HttpGet]
         //[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
       // [Authorize]
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
       // [Authorize]
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

            DateTime dt = new DateTime(2008, 3, 9, 16, 5, 7, 123);
            try
            {
                if (ModelState.IsValid)
                {
                    //if (obj.UserName == null)
                    //    return BadRequest(new { error = "User Id not found" });

                    var isEmailAlreadyExists = UserDetails.User.Any(x => x.UserEmail == obj.UserEmail);
                   
                    if (isEmailAlreadyExists)
                    {
                        ModelState.AddModelError("Email", "User with this email already exists");
                    }
                    User newobj = new User();
                    newobj.UserName = obj.UserName;
                    newobj.UserEmail = obj.UserEmail;
                    newobj.UserPassword = obj.UserPassword;

                    //string strDate = UserDOB.ToString("dd/MM/yyyy");

                    newobj.UserDOB = obj.UserDOB.Date;
                        
                    UserDetails.User.Add(newobj);
                    UserDetails.SaveChanges();
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(HttpContext.Response.StatusCode, " email already exists");
            }
            return Ok("email already exists");
            
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
