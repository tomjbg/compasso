using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using compasso.Models;
using compasso.Models.Identity;
using System.Security.Cryptography;
using System.Collections.Generic;
using System.Text;

namespace compasso.Security
{
    public class AccessManager
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private SigningConfigurations _signingConfigurations;
        private TokenConfigurations _tokenConfigurations;

        public AccessManager(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            SigningConfigurations signingConfigurations,
            TokenConfigurations tokenConfigurations
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _signingConfigurations = signingConfigurations;
            _tokenConfigurations = tokenConfigurations;
        }

        public bool ValidateCredentials(User user)
        {
            bool credenciaisValidas = false;
        
            // Verifica se o usuário existe
            var userIdentity = _userManager.FindByNameAsync(user.Username).Result;
            if (userIdentity != null)
            {
                // Efetuando o login
                var resultadoLogin = _signInManager.CheckPasswordSignInAsync(userIdentity, user.Password, false).Result;
                credenciaisValidas = resultadoLogin.Succeeded;
            }
            return credenciaisValidas;
        }

        public Token GenerateToken(User user)
        {
            // Criando a chave de segurança
            SecurityKey securityKey;
            //using (var provider = new RSACryptoServiceProvider(2048))
            //{
            //    securityKey = new RsaSecurityKey(provider.ExportParameters(true));
            //}
            var securitykeyByte = Encoding.ASCII.GetBytes("Senha@123");
            securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(securitykeyByte);
            // Instância de uma ClaimsIdentity
            ClaimsIdentity identity = new ClaimsIdentity(new List<Claim>() {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.Username)
            });

            DateTime dataCriacao = DateTime.Now;
            DateTime dataExpiracao = dataCriacao + TimeSpan.FromSeconds(_tokenConfigurations.Seconds);
            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _tokenConfigurations.Issuer,
                Audience = _tokenConfigurations.Audience,
                SigningCredentials = _signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = dataCriacao,
                Expires = dataExpiracao
            });

            var token = handler.WriteToken(securityToken);

            return new Token()
            {
                Authenticated = true,
                Created = dataCriacao.ToString("yyyy-MM-dd HH:mm:ss"),
                Expiration = dataExpiracao.ToString("yyyy-MM-dd HH:mm:ss"),
                UserName = user.Username,
                AccessToken = token,
                Message = "OK"
            };

        }


    }
}