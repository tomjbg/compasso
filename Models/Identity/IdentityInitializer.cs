using System;
using Microsoft.AspNetCore.Identity;
using compasso.Data;
using compasso.Models.Identity;

namespace compasso.Models.Identity
{
    public class IdentityInitializer
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public IdentityInitializer(
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public void Initialize()
        {
            
            if (_context.Database.EnsureCreated())
            {
                if (!_roleManager.RoleExistsAsync("Admin").Result)
                {
                    var resultado = _roleManager.CreateAsync(new IdentityRole("Admin")).Result;
                    if (!resultado.Succeeded)
                    {
                        throw new Exception($"Erro durante a criação da role Admin.");
                    }
                }
                if (!_roleManager.RoleExistsAsync("User").Result)
                {
                    var resultado = _roleManager.CreateAsync(new IdentityRole("User")).Result;
                    if (!resultado.Succeeded)
                    {
                        throw new Exception($"Erro durante a criação da role User.");
                    }
                }

                CreateUser(new ApplicationUser()
                {
                    UserName = "admincompasso",
                    Email = "admincompasso@compasso.co",
                    EmailConfirmed = true
                }, "A#d$m#C$o#m$p#a$s#s", "Admin");

                CreateUser(new ApplicationUser()
                {
                    UserName = "usercompasso",
                    Email = "usercompasso@compasso.co",
                    EmailConfirmed = true
                }, "U#s$e#r$C#o$m#p$a#s$s", "Admin");
            }


        }

        private void CreateUser(ApplicationUser user, string password, string initialRole = null)
        {
            try
            {
                if (_userManager.FindByNameAsync(user.UserName).Result == null)
                {
                    var resultado = _userManager.CreateAsync(user, password).Result;
                    //Console.WriteLine("Usuario criado: " + resultado.Succeeded);

                    if (resultado.Succeeded && !String.IsNullOrWhiteSpace(initialRole))
                    {
                        _userManager.AddToRoleAsync(user, initialRole).Wait();
                    }
                }
            }
            catch (Exception ex)
            {
                string err = ex.Message;
                throw;
            }

        }

    }
}