FROM eclipse-temurin:17-jdk-alpine
COPY --from=build /target/moneysense-0.0.1-SNAPSHOT.jar moneysense-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "moneysense-0.0.1-SNAPSHOT.jar"]