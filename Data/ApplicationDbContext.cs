using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using compasso.Models.Identity;
using Microsoft.AspNetCore.Identity;

namespace compasso.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            
            IdentityRole roleAdmin = new IdentityRole("Admin");
            IdentityRole roleUser = new IdentityRole("User");
            

            ApplicationUser admin = new ApplicationUser()
            {
                UserName = "admincompasso",
                NormalizedUserName = "admincompasso",
                Email = "admincompasso@compasso.co",
                EmailConfirmed = true,
            };
            string hashAdmin = new PasswordHasher<ApplicationUser>().HashPassword(admin, "A#d$m#C$o#m$p#a$s#s");
            admin.PasswordHash = hashAdmin;

            ApplicationUser user = new ApplicationUser()
            {
                UserName = "usercompasso",
                NormalizedUserName = "usercompasso",
                Email = "usercompasso@compasso.co",
                EmailConfirmed = true
            };
            string hashUser = new PasswordHasher<ApplicationUser>().HashPassword(user, "U#s$e#r$C#o$m#p$a#s$s");
            user.PasswordHash = hashUser;

            //Users.Add(admin);
            //Users.Add(user);

            //UserRoles.Add(new IdentityUserRole<string>()
            //{
            //    UserId = admin.Id,
            //    RoleId = roleAdmin.Id
            //});

            //UserRoles.Add(new IdentityUserRole<string>()
            //{
            //    UserId = user.Id,
            //    RoleId = roleUser.Id
            //});

            builder.Entity<IdentityRole>().HasData( roleAdmin, roleUser);

            builder.Entity<ApplicationUser>().HasData(admin, user);

            builder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string>() { UserId = user.Id, RoleId = roleUser.Id },
                new IdentityUserRole<string>() { UserId = admin.Id, RoleId = roleAdmin.Id }
                );


            base.OnModelCreating(builder);

        }

    }
}