using Microsoft.EntityFrameworkCore.Migrations;

namespace compasso.Migrations.CompassoDb
{
    public partial class Imagem_Data64 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Data64",
                table: "Imagem",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Data64",
                table: "Imagem");
        }
    }
}
