using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CrudConAngularApi.Migrations
{
    public partial class cambios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NumeroExpiracion",
                table: "TarjetaCredito",
                newName: "FechaExpiracion");

            migrationBuilder.RenameColumn(
                name: "FechaTarjeta",
                table: "TarjetaCredito",
                newName: "NumeroTarjeta");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NumeroTarjeta",
                table: "TarjetaCredito",
                newName: "FechaTarjeta");

            migrationBuilder.RenameColumn(
                name: "FechaExpiracion",
                table: "TarjetaCredito",
                newName: "NumeroExpiracion");
        }
    }
}
