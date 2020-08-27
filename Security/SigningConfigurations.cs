using System.Security.Cryptography;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace compasso.Security
{
    public class SigningConfigurations
    {
        public SecurityKey Key { get; }
        public SigningCredentials SigningCredentials { get; }

        public SigningConfigurations()
        {

            using (var provider = new RSACryptoServiceProvider(2048))
            {
                Key = new RsaSecurityKey(provider.ExportParameters(true));
            }

            SigningCredentials = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);

            //var KeyByte = Encoding.ASCII.GetBytes("Senha@MaiorQue128bits");
            //Key = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(KeyByte);
            //SigningCredentials = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
        }
        
    }
}