using System.ComponentModel.DataAnnotations;

namespace CrudConAngularApi.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string User { get; set; }
        [Required]
        public string Contraseña { get; set; }
    }
}
