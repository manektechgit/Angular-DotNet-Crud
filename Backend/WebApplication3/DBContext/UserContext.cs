using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Model;


namespace WebApplication3.DBContext
{
    public class UserContext: DbContext
    {
        public IConfiguration _configuration { get; }
        public UserContext(DbContextOptions<UserContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("default"));
            optionsBuilder.EnableSensitiveDataLogging();
            optionsBuilder.LogTo(Console.WriteLine, new[] { RelationalEventId.CommandExecuted });
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<User> User { get; set; }
       // public DbSet<JwtSettings> JwtSettings { get; set; }
    }
}
