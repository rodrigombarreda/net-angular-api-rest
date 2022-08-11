using CrudConAngularApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudConAngularApi
{
    public class AplicationDbContext : DbContext
    {
       public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
    }
}
