using Microsoft.AspNetCore.Mvc;
using CrudConAngularApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;

namespace CrudConAngularApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : Controller
    {
        private readonly AplicationDbContext _context;

        public UsuarioController(AplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("{usuario},{contrasenia}")]
        public async Task<IActionResult> Get(String usuario, String contrasenia)
        {
            var es_valido = new SqlParameter("@es_valido", SqlDbType.Bit);
            es_valido.Direction = ParameterDirection.Output;

            await _context.Database.ExecuteSqlInterpolatedAsync($@"EXEC sp_login @usuario={usuario},@contrasenia={contrasenia},@es_valido={es_valido} OUTPUT");
            var valido = (bool)es_valido.Value;
            return Ok(valido);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            try
            {
                _context.Add(usuario);
                await _context.SaveChangesAsync();
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
