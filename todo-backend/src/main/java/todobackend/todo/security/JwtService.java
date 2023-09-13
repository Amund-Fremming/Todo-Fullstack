package todobackend.todo.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

import java.security.Key;

public class JwtService {

    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Maybe choose Long as a datatype
    public String createToken(int userid) {
        return Jwts.builder()
                .setSubject(Integer.toString(userid))
                .signWith(key)
                .compact();
    }

    // Maybe choose Long as a datatype
    public int getUserIdFromToken(String token) {
        return Integer.parseInt(
                Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject()
        );
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (SignatureException e) {
            return false;
        }
    }

}
