package com.loremipsum.moneysense.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 *
 *  This class represent table USERS
 * @author Orest Sonich
 * @version 1.0
 *
 */

@Service
public class JwtService {

    private static final String SECRET_KEY = "2A472D4B6150645367556B58703273357638792F423F4528482B4D6251655468";

    public String exctractEmail(String jwt) {
        return extractClaim(jwt, Claims::getSubject);
    }

    public <T> T extractClaim(String jwt, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(jwt);
        return claimsResolver.apply(claims);
    }

    public String generateJwt(UserDetails userDetails){
        return generateJwt(new HashMap<>(), userDetails);
    }

    public String generateJwt(
            Map<String, Object> exctractClaims,
            UserDetails userDetails
    ){
            return Jwts
                    .builder()
                    .setClaims(exctractClaims)
                    .setSubject(userDetails.getUsername())
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                    .signWith(getSisnInKey(), SignatureAlgorithm.HS256)
                    .compact();

    }

    public boolean isJwtValid(String jwt, UserDetails userDetails){
        final String userEmail = exctractEmail(jwt);
        return (userEmail.equals(userDetails.getUsername())) && !isJwtExpired(jwt);
    }

    private boolean isJwtExpired(String jwt) {
        return extractExpiration(jwt).before(new Date());
    }

    private Date extractExpiration(String jwt) {
        return extractClaim(jwt, Claims::getExpiration);
    }

    private Claims extractAllClaims(String jwt){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSisnInKey())
                .build()
                .parseClaimsJws(jwt)
                .getBody();
    }

    private Key getSisnInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
