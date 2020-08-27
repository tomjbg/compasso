using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace compasso.Migrations.CompassoDb
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Portifolio",
                columns: table => new
                {
                    PortifolioId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NomeCliente = table.Column<string>(type: "varchar(150)", maxLength: 150, nullable: false),
                    Descricao = table.Column<string>(type: "varchar(1024)", maxLength: 1024, nullable: false),
                    Imagem = table.Column<string>(type: "varchar(1024)", maxLength: 1024, nullable: true),
                    Link = table.Column<string>(type: "varchar(1024)", maxLength: 1024, nullable: true),
                    Ativo = table.Column<bool>(type: "bool", nullable: true, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Portifolio", x => x.PortifolioId);
                });

            migrationBuilder.CreateTable(
                name: "Servico",
                columns: table => new
                {
                    ServicoId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(type: "varchar(150)", maxLength: 250, nullable: false),
                    UrlVideo = table.Column<string>(type: "varchar(1024)", nullable: true),
                    DescricaoCurta = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: false),
                    DescricaoLonga = table.Column<string>(type: "text", nullable: true),
                    Ativo = table.Column<bool>(type: "bool", nullable: true, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Servico", x => x.ServicoId);
                });

            migrationBuilder.CreateTable(
                name: "Imagem",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Name = table.Column<string>(type: "varchar(255)", nullable: false),
                    Data = table.Column<byte[]>(type: "blob", nullable: false),
                    Length = table.Column<long>(type: "long", nullable: false),
                    ContentType = table.Column<string>(type: "varchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Imagem_Servico_Id",
                        column: x => x.Id,
                        principalTable: "Servico",
                        principalColumn: "ServicoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServicoPortifolio",
                columns: table => new
                {
                    ServicoId = table.Column<int>(nullable: false),
                    PortifolioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServicoPortifolio", x => new { x.ServicoId, x.PortifolioId });
                    table.ForeignKey(
                        name: "FK_ServicoPortifolio_Portifolio_PortifolioId",
                        column: x => x.PortifolioId,
                        principalTable: "Portifolio",
                        principalColumn: "PortifolioId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServicoPortifolio_Servico_ServicoId",
                        column: x => x.ServicoId,
                        principalTable: "Servico",
                        principalColumn: "ServicoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vantagem",
                columns: table => new
                {
                    VantagemId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descricao = table.Column<string>(type: "varchar(250)", nullable: false),
                    ServicoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vantagem", x => x.VantagemId);
                    table.ForeignKey(
                        name: "FK_Vantagem_Servico_ServicoId",
                        column: x => x.ServicoId,
                        principalTable: "Servico",
                        principalColumn: "ServicoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServicoPortifolio_PortifolioId",
                table: "ServicoPortifolio",
                column: "PortifolioId");

            migrationBuilder.CreateIndex(
                name: "IX_Vantagem_ServicoId",
                table: "Vantagem",
                column: "ServicoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imagem");

            migrationBuilder.DropTable(
                name: "ServicoPortifolio");

            migrationBuilder.DropTable(
                name: "Vantagem");

            migrationBuilder.DropTable(
                name: "Portifolio");

            migrationBuilder.DropTable(
                name: "Servico");
        }
    }
}
