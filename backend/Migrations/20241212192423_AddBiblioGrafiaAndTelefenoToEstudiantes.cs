using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_elearning.Migrations
{
    /// <inheritdoc />
    public partial class AddBiblioGrafiaAndTelefenoToEstudiantes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_estudiantes",
                table: "estudiantes");

            migrationBuilder.RenameTable(
                name: "estudiantes",
                newName: "estudiante");

            migrationBuilder.RenameColumn(
                name: "Telefeno",
                table: "estudiante",
                newName: "Telefono");

            migrationBuilder.RenameColumn(
                name: "BiblioGrafia",
                table: "estudiante",
                newName: "Biografia");

            migrationBuilder.AddPrimaryKey(
                name: "PK_estudiante",
                table: "estudiante",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_estudiante",
                table: "estudiante");

            migrationBuilder.RenameTable(
                name: "estudiante",
                newName: "estudiantes");

            migrationBuilder.RenameColumn(
                name: "Telefono",
                table: "estudiantes",
                newName: "Telefeno");

            migrationBuilder.RenameColumn(
                name: "Biografia",
                table: "estudiantes",
                newName: "BiblioGrafia");

            migrationBuilder.AddPrimaryKey(
                name: "PK_estudiantes",
                table: "estudiantes",
                column: "Id");
        }
    }
}
