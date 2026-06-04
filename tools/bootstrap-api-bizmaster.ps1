$ErrorActionPreference = 'Stop'

$root = 'D:\MON BUREAU\PPE302\PPE-302\ppe-302-2\API-BIZMASTER'
$secret = 'Qml6TWFzdGVyU2VjcmV0S2V5MTIzNDU2Nzg5MDEyMzQ1Ng=='

function Write-File {
    param(
        [Parameter(Mandatory = $true)][string]$Path,
        [Parameter(Mandatory = $true)][string]$Content
    )

    $directory = Split-Path -Parent $Path
    if ($directory) {
        New-Item -ItemType Directory -Force -Path $directory | Out-Null
    }

    Set-Content -Path $Path -Value $Content -Encoding UTF8
}

function Render-Template {
    param(
        [Parameter(Mandatory = $true)][string]$Template,
        [Parameter(Mandatory = $true)][hashtable]$Values
    )

    $result = $Template
    foreach ($key in $Values.Keys) {
        $result = $result.Replace('__' + $key + '__', [string]$Values[$key])
    }

    return $result
}

function New-StandardServicePom {
    param([string]$ArtifactId, [string]$Name)

    $template = @'
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>com.bizmaster</groupId>
    <artifactId>api-bizmaster</artifactId>
    <version>1.0.0-SNAPSHOT</version>
  </parent>

  <artifactId>__ARTIFACT_ID__</artifactId>
  <name>__NAME__</name>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
'@

    return Render-Template -Template $template -Values @{
        ARTIFACT_ID = $ArtifactId
        NAME        = $Name
    }
}

function New-ServiceApplication {
    param([string]$PackageName, [string]$AppClass)

    $template = @'
package __PACKAGE__;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class __APP_CLASS__ {

    public static void main(String[] args) {
        SpringApplication.run(__APP_CLASS__.class, args);
    }
}
'@

    return Render-Template -Template $template -Values @{
        PACKAGE  = $PackageName
        APP_CLASS = $AppClass
    }
}

function New-ServiceSecurity {
    $template = @'
package __PACKAGE__.config;

import java.util.Base64;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/actuator/**").permitAll()
                        .anyRequest().authenticated())
                .oauth2ResourceServer(oauth2 -> oauth2.jwt())
                .build();
    }

    @Bean
    public JwtDecoder jwtDecoder(@Value("${app.security.jwt-secret}") String secret) {
        SecretKey key = new SecretKeySpec(Base64.getDecoder().decode(secret), "HmacSHA256");
        return NimbusJwtDecoder.withSecretKey(key).macAlgorithm(MacAlgorithm.HS256).build();
    }
}
'@

    return $template
}

function New-DashboardMetricEntity {
    param([string]$PackageName)

    $template = @'
package __PACKAGE__.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "dashboard_metrics")
public class DashboardMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(nullable = false)
    private String label;

    @Column(nullable = false)
    private Long value;

    @Column(nullable = false)
    private String color;

    private Instant updatedAt;

    public DashboardMetric() {
    }

    public DashboardMetric(String code, String label, Long value, String color) {
        this.code = code;
        this.label = label;
        this.value = value;
        this.color = color;
        this.updatedAt = Instant.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }
}
'@

    return Render-Template -Template $template -Values @{ PACKAGE = $PackageName }
}

function New-DashboardRepository {
    param([string]$PackageName)

    $template = @'
package __PACKAGE__.repository;

import __PACKAGE__.entity.DashboardMetric;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DashboardMetricRepository extends JpaRepository<DashboardMetric, Long> {
    List<DashboardMetric> findAllByOrderByLabelAsc();
}
'@

    return Render-Template -Template $template -Values @{ PACKAGE = $PackageName }
}

function New-DashboardResponse {
    param([string]$PackageName)

    $template = @'
package __PACKAGE__.dto;

import __PACKAGE__.entity.DashboardMetric;
import java.util.List;

public record DashboardSummaryResponse(
        String service,
        List<DashboardMetric> metrics
) {}
'@

    return Render-Template -Template $template -Values @{ PACKAGE = $PackageName }
}

function New-DashboardService {
    param([string]$PackageName)

    $template = @'
package __PACKAGE__.service;

import __PACKAGE__.entity.DashboardMetric;
import __PACKAGE__.repository.DashboardMetricRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final DashboardMetricRepository repository;

    public DashboardService(DashboardMetricRepository repository) {
        this.repository = repository;
    }

    public List<DashboardMetric> summary() {
        return repository.findAllByOrderByLabelAsc();
    }
}
'@

    return Render-Template -Template $template -Values @{ PACKAGE = $PackageName }
}

function New-DashboardController {
    param([string]$PackageName, [string]$ServiceName)

    $template = @'
package __PACKAGE__.controller;

import __PACKAGE__.dto.DashboardSummaryResponse;
import __PACKAGE__.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/summary")
    public DashboardSummaryResponse summary() {
        return new DashboardSummaryResponse("__SERVICE__", dashboardService.summary());
    }
}
'@

    return Render-Template -Template $template -Values @{
        PACKAGE  = $PackageName
        SERVICE  = $ServiceName
    }
}

function New-DashboardLoader {
    param(
        [string]$PackageName,
        [object[]]$Metrics
    )

    $entries = $Metrics | ForEach-Object {
        'new DashboardMetric("{0}", "{1}", {2}, "{3}")' -f $_['code'], $_['label'], $_['value'], $_['color']
    }

    $metricsBlock = ($entries -join ",`r`n                ")

    $template = @'
package __PACKAGE__.bootstrap;

import __PACKAGE__.entity.DashboardMetric;
import __PACKAGE__.repository.DashboardMetricRepository;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner seed(DashboardMetricRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(List.of(
                    __METRICS__
                ));
            }
        };
    }
}
'@

    return Render-Template -Template $template -Values @{
        PACKAGE  = $PackageName
        METRICS  = $metricsBlock
    }
}

function New-ServiceYaml {
    param(
        [string]$AppName,
        [string]$DbName,
        [int]$Port
    )

    $template = @'
server:
  port: __PORT__

spring:
  application:
    name: __APP_NAME__
  datasource:
    url: jdbc:postgresql://localhost:5432/__DB_NAME__
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        format_sql: true
  config:
    import: optional:configserver:http://localhost:8888

app:
  security:
    jwt-secret: __JWT_SECRET__

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
    register-with-eureka: true
    fetch-registry: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
'@

    return Render-Template -Template $template -Values @{
        PORT       = $Port
        APP_NAME   = $AppName
        DB_NAME    = $DbName
        JWT_SECRET = $secret
    }
}

function New-StandardService {
    param(
        [string]$ModuleFolder,
        [string]$PackageName,
        [string]$AppClass,
        [string]$AppName,
        [string]$DbName,
        [int]$Port,
        [string]$Title,
        [object[]]$Metrics
    )

    $artifactId = $ModuleFolder
    Write-File "$root\$ModuleFolder\pom.xml" (New-StandardServicePom -ArtifactId $artifactId -Name $Title)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\$AppClass.java" (New-ServiceApplication -PackageName $PackageName -AppClass $AppClass)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\config\SecurityConfig.java" ((New-ServiceSecurity).Replace('__PACKAGE__', $PackageName))
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\entity\DashboardMetric.java" (New-DashboardMetricEntity -PackageName $PackageName)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\repository\DashboardMetricRepository.java" (New-DashboardRepository -PackageName $PackageName)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\service\DashboardService.java" (New-DashboardService -PackageName $PackageName)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\controller\DashboardController.java" (New-DashboardController -PackageName $PackageName -ServiceName $AppName)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\dto\DashboardSummaryResponse.java" (New-DashboardResponse -PackageName $PackageName)
    Write-File "$root\$ModuleFolder\src\main\java\$($PackageName -replace '\.', '\\')\bootstrap\DataLoader.java" (New-DashboardLoader -PackageName $PackageName -Metrics $Metrics)
    Write-File "$root\$ModuleFolder\src\main\resources\application.yml" (New-ServiceYaml -AppName $AppName -DbName $DbName -Port $Port)

    $configTemplate = @'
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/__DB_NAME__
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        format_sql: true
app:
  security:
    jwt-secret: __JWT_SECRET__
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
'@

    Write-File "$root\config-repo\$AppName.yml" (Render-Template -Template $configTemplate -Values @{
        DB_NAME    = $DbName
        JWT_SECRET = $secret
    })
}

function New-AuthService {
    $moduleFolder = 'API-Auth'
    $packageName = 'com.bizmaster.auth'
    $appClass = 'AuthApplication'
    $appName = 'auth-service'
    $dbName = 'auth_db'
    $port = 9090

    $pom = @'
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>com.bizmaster</groupId>
    <artifactId>api-bizmaster</artifactId>
    <version>1.0.0-SNAPSHOT</version>
  </parent>

  <artifactId>API-Auth</artifactId>
  <name>API Auth</name>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>com.nimbusds</groupId>
      <artifactId>nimbus-jose-jwt</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
'@
    Write-File "$root\$moduleFolder\pom.xml" $pom
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\AuthApplication.java" @'
package com.bizmaster.auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class AuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\entity\RoleName.java" @'
package com.bizmaster.auth.entity;

public enum RoleName {
    OWNER,
    DIRECTEUR,
    INSTRUCTOR,
    SECRETARY,
    PHARMACIEN,
    ACCOUNTANT,
    STAFF
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\entity\Role.java" @'
package com.bizmaster.auth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\entity\UserAccount.java" @'
package com.bizmaster.auth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class UserAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String password;
    private boolean active = true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }
    public Set<Role> getRoles() { return roles; }
    public void setRoles(Set<Role> roles) { this.roles = roles; }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\repository\RoleRepository.java" @'
package com.bizmaster.auth.repository;

import com.bizmaster.auth.entity.Role;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\repository\UserAccountRepository.java" @'
package com.bizmaster.auth.repository;

import com.bizmaster.auth.entity.UserAccount;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    Optional<UserAccount> findByEmail(String email);
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\dto\LoginRequest.java" @'
package com.bizmaster.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @Email @NotBlank String email,
        @NotBlank String password
) {}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\dto\RegisterRequest.java" @'
package com.bizmaster.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
        @NotBlank String fullName,
        @Email @NotBlank String email,
        @NotBlank String password
) {}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\dto\AuthResponse.java" @'
package com.bizmaster.auth.dto;

import java.util.Set;

public record AuthResponse(
        String token,
        String tokenType,
        String fullName,
        String email,
        Set<String> roles
) {}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\service\CustomUserDetailsService.java" @'
package com.bizmaster.auth.service;

import com.bizmaster.auth.entity.UserAccount;
import com.bizmaster.auth.repository.UserAccountRepository;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserAccountRepository userAccountRepository;

    public CustomUserDetailsService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAccount user = userAccountRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Collection<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toSet());

        return new User(user.getEmail(), user.getPassword(), user.isActive(), true, true, true, authorities);
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\service\JwtService.java" @'
package com.bizmaster.auth.service;

import com.bizmaster.auth.entity.UserAccount;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.OctetSequenceKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import java.time.Duration;
import java.time.Instant;
import java.util.Base64;
import java.util.stream.Collectors;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jose.jws.JwsHeader;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

    private final JwtEncoder jwtEncoder;

    public JwtService(@Value("${app.security.jwt-secret}") String secret) {
        SecretKey key = new SecretKeySpec(Base64.getDecoder().decode(secret), "HmacSHA256");
        JWK jwk = new OctetSequenceKey.Builder(key).build();
        this.jwtEncoder = new NimbusJwtEncoder(new ImmutableJWKSet<>(new JWKSet(jwk)));
    }

    public String generateToken(UserAccount userAccount) {
        Instant now = Instant.now();
        String roles = userAccount.getRoles().stream()
                .map(role -> role.getName())
                .collect(Collectors.joining(" "));

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("api-auth")
                .subject(userAccount.getEmail())
                .issuedAt(now)
                .expiresAt(now.plus(Duration.ofHours(8)))
                .claim("name", userAccount.getFullName())
                .claim("roles", roles)
                .build();

        return jwtEncoder.encode(JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(), claims)).getTokenValue();
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\service\AuthService.java" @'
package com.bizmaster.auth.service;

import com.bizmaster.auth.dto.AuthResponse;
import com.bizmaster.auth.dto.LoginRequest;
import com.bizmaster.auth.dto.RegisterRequest;
import com.bizmaster.auth.entity.Role;
import com.bizmaster.auth.entity.RoleName;
import com.bizmaster.auth.entity.UserAccount;
import com.bizmaster.auth.repository.RoleRepository;
import com.bizmaster.auth.repository.UserAccountRepository;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserAccountRepository userAccountRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(AuthenticationManager authenticationManager,
                       UserAccountRepository userAccountRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userAccountRepository = userAccountRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        UserAccount user = userAccountRepository.findByEmail(request.email())
                .orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));
        return buildResponse(user);
    }

    public AuthResponse register(RegisterRequest request) {
        if (userAccountRepository.findByEmail(request.email()).isPresent()) {
            throw new IllegalArgumentException("Email already used");
        }

        UserAccount user = new UserAccount();
        user.setFullName(request.fullName());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRoles(Set.of(resolveRole(RoleName.STAFF)));
        return buildResponse(userAccountRepository.save(user));
    }

    private Role resolveRole(RoleName roleName) {
        return roleRepository.findByName(roleName.name())
                .orElseGet(() -> {
                    Role role = new Role();
                    role.setName(roleName.name());
                    return roleRepository.save(role);
                });
    }

    private AuthResponse buildResponse(UserAccount user) {
        String token = jwtService.generateToken(user);
        Set<String> roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
        return new AuthResponse(token, "Bearer", user.getFullName(), user.getEmail(), roles);
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\controller\AuthController.java" @'
package com.bizmaster.auth.controller;

import com.bizmaster.auth.dto.AuthResponse;
import com.bizmaster.auth.dto.LoginRequest;
import com.bizmaster.auth.dto.RegisterRequest;
import com.bizmaster.auth.service.AuthService;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/register")
    public AuthResponse register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @GetMapping("/me")
    public Map<String, Object> me(@AuthenticationPrincipal Jwt jwt) {
        return Map.of(
                "email", jwt.getSubject(),
                "name", jwt.getClaimAsString("name"),
                "roles", jwt.getClaimAsStringList("roles") == null ? List.of() : jwt.getClaimAsStringList("roles")
        );
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\config\SecurityConfig.java" @'
package com.bizmaster.auth.config;

import java.util.Base64;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.web.SecurityFilterChain;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.OctetSequenceKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/login", "/api/auth/register", "/actuator/**").permitAll()
                        .anyRequest().authenticated())
                .oauth2ResourceServer(oauth2 -> oauth2.jwt())
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public JwtDecoder jwtDecoder(@Value("${app.security.jwt-secret}") String secret) {
        SecretKey key = new SecretKeySpec(Base64.getDecoder().decode(secret), "HmacSHA256");
        return NimbusJwtDecoder.withSecretKey(key).macAlgorithm(MacAlgorithm.HS256).build();
    }

    @Bean
    public JwtEncoder jwtEncoder(@Value("${app.security.jwt-secret}") String secret) {
        SecretKey key = new SecretKeySpec(Base64.getDecoder().decode(secret), "HmacSHA256");
        JWK jwk = new OctetSequenceKey.Builder(key).build();
        return new NimbusJwtEncoder(new ImmutableJWKSet<>(new JWKSet(jwk)));
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\java\com\bizmaster\auth\bootstrap\AuthDataLoader.java" @'
package com.bizmaster.auth.bootstrap;

import com.bizmaster.auth.entity.Role;
import com.bizmaster.auth.entity.UserAccount;
import com.bizmaster.auth.repository.RoleRepository;
import com.bizmaster.auth.repository.UserAccountRepository;
import java.util.Set;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AuthDataLoader {

    @Bean
    CommandLineRunner seedAuthData(RoleRepository roleRepository,
                                   UserAccountRepository userAccountRepository,
                                   PasswordEncoder passwordEncoder) {
        return args -> {
            Role ownerRole = roleRepository.findByName("OWNER").orElseGet(() -> saveRole(roleRepository, "OWNER"));
            Role staffRole = roleRepository.findByName("STAFF").orElseGet(() -> saveRole(roleRepository, "STAFF"));
            Role directeurRole = roleRepository.findByName("DIRECTEUR").orElseGet(() -> saveRole(roleRepository, "DIRECTEUR"));

            if (userAccountRepository.findByEmail("owner@bizmaster.com").isEmpty()) {
                UserAccount owner = new UserAccount();
                owner.setFullName("Proprietaire BizMaster");
                owner.setEmail("owner@bizmaster.com");
                owner.setPassword(passwordEncoder.encode("Password123!"));
                owner.setRoles(Set.of(ownerRole, directeurRole));
                userAccountRepository.save(owner);
            }

            if (userAccountRepository.findByEmail("staff@bizmaster.com").isEmpty()) {
                UserAccount staff = new UserAccount();
                staff.setFullName("Utilisateur Standard");
                staff.setEmail("staff@bizmaster.com");
                staff.setPassword(passwordEncoder.encode("Password123!"));
                staff.setRoles(Set.of(staffRole));
                userAccountRepository.save(staff);
            }
        };
    }

    private Role saveRole(RoleRepository roleRepository, String name) {
        Role role = new Role();
        role.setName(name);
        return roleRepository.save(role);
    }
}
'@
    Write-File "$root\$moduleFolder\src\main\resources\application.yml" @"
server:
  port: $port

spring:
  application:
    name: $appName
  datasource:
    url: jdbc:postgresql://localhost:5432/$dbName
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        format_sql: true
  config:
    import: optional:configserver:http://localhost:8888

app:
  security:
    jwt-secret: $secret

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
    register-with-eureka: true
    fetch-registry: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
"@
    Write-File "$root\config-repo\$appName.yml" @"
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/$dbName
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        format_sql: true
app:
  security:
    jwt-secret: $secret
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
"@
}

function New-InfraModule {
    param(
        [string]$Folder,
        [string]$ArtifactId,
        [string]$Name,
        [string]$PackageName,
        [string]$AppClass,
        [string]$YamlContent,
        [string]$AppJava
    )

    Write-File "$root\$Folder\pom.xml" $YamlContent
    Write-File "$root\$Folder\src\main\java\$($PackageName -replace '\.', '\\')\$AppClass.java" $AppJava
}

Write-File "$root\pom.xml" @'
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.2</version>
    <relativePath/>
  </parent>

  <groupId>com.bizmaster</groupId>
  <artifactId>api-bizmaster</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <packaging>pom</packaging>
  <name>API BizMaster</name>

  <modules>
    <module>API-Discovery</module>
    <module>API-Config</module>
    <module>API-Gateway</module>
    <module>API-Auth</module>
    <module>API-Gestion-education</module>
    <module>API-Gestion-sante</module>
    <module>API-Gestion-restauration</module>
    <module>API-Gestion-commerce</module>
    <module>API-Gestion-construction</module>
    <module>API-Gestion-de-ferme</module>
    <module>API-Gestion-hotellerie</module>
    <module>API-Gestion-logistique</module>
    <module>API-transport</module>
  </modules>

  <properties>
    <java.version>17</java.version>
    <spring-cloud.version>2023.0.3</spring-cloud.version>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-dependencies</artifactId>
        <version>${spring-cloud.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
</project>
'@

Write-File "$root\README.md" @'
# API BizMaster

Architecture microservices Spring Boot / Spring Cloud pour les applications BizMaster.

## Modules
- API-Discovery
- API-Config
- API-Gateway
- API-Auth
- API-Gestion-education
- API-Gestion-sante
- API-Gestion-restauration
- API-Gestion-commerce
- API-Gestion-construction
- API-Gestion-de-ferme
- API-Gestion-hotellerie
- API-Gestion-logistique
- API-transport

## Principes
- base PostgreSQL autonome par microservice
- sécurité centralisée avec Spring Security + JWT
- tableau de bord exposé par chaque microservice
- routage central via Spring Cloud Gateway
'@

Write-File "$root\config-repo\application.yml" @"
spring:
  cloud:
    config:
      enabled: true
app:
  security:
    jwt-secret: $secret
"@

# Discovery
Write-File "$root\API-Discovery\pom.xml" @'
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.bizmaster</groupId>
    <artifactId>api-bizmaster</artifactId>
    <version>1.0.0-SNAPSHOT</version>
  </parent>
  <artifactId>API-Discovery</artifactId>
  <name>API Discovery</name>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
'@
Write-File "$root\API-Discovery\src\main\java\com\bizmaster\discovery\DiscoveryApplication.java" @'
package com.bizmaster.discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class DiscoveryApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiscoveryApplication.class, args);
    }
}
'@
Write-File "$root\API-Discovery\src\main\resources\application.yml" @'
server:
  port: 8761

spring:
  application:
    name: discovery-service

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    enable-self-preservation: false

management:
  endpoints:
    web:
      exposure:
        include: health,info
'@

# Config
Write-File "$root\API-Config\pom.xml" @'
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.bizmaster</groupId>
    <artifactId>api-bizmaster</artifactId>
    <version>1.0.0-SNAPSHOT</version>
  </parent>
  <artifactId>API-Config</artifactId>
  <name>API Config</name>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-config-server</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
'@
Write-File "$root\API-Config\src\main\java\com\bizmaster\config\ConfigApplication.java" @'
package com.bizmaster.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class ConfigApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigApplication.class, args);
    }
}
'@
Write-File "$root\API-Config\src\main\resources\application.yml" @'
server:
  port: 8888

spring:
  application:
    name: config-service
  profiles:
    active: native
  cloud:
    config:
      server:
        native:
          search-locations: file:../config-repo

management:
  endpoints:
    web:
      exposure:
        include: health,info
'@

# Gateway
Write-File "$root\API-Gateway\pom.xml" @'
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.bizmaster</groupId>
    <artifactId>api-bizmaster</artifactId>
    <version>1.0.0-SNAPSHOT</version>
  </parent>
  <artifactId>API-Gateway</artifactId>
  <name>API Gateway</name>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-webflux</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-gateway</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
'@
Write-File "$root\API-Gateway\src\main\java\com\bizmaster\gateway\GatewayApplication.java" @'
package com.bizmaster.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class GatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}
'@
Write-File "$root\API-Gateway\src\main\java\com\bizmaster\gateway\config\SecurityConfig.java" @'
package com.bizmaster.gateway.config;

import java.util.Base64;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        return http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchanges -> exchanges
                        .pathMatchers("/actuator/**", "/api/auth/**").permitAll()
                        .pathMatchers(HttpMethod.OPTIONS).permitAll()
                        .anyExchange().authenticated())
                .oauth2ResourceServer(oauth2 -> oauth2.jwt())
                .build();
    }

    @Bean
    public ReactiveJwtDecoder reactiveJwtDecoder(@Value("${app.security.jwt-secret}") String secret) {
        SecretKey key = new SecretKeySpec(Base64.getDecoder().decode(secret), "HmacSHA256");
        return NimbusReactiveJwtDecoder.withSecretKey(key).macAlgorithm(MacAlgorithm.HS256).build();
    }
}
'@
Write-File "$root\API-Gateway\src\main\resources\application.yml" @'
server:
  port: 8080

spring:
  application:
    name: api-gateway
  main:
    web-application-type: reactive
  cloud:
    gateway:
      routes:
        - id: auth-service
          uri: lb://auth-service
          predicates:
            - Path=/api/auth/**
        - id: education-service
          uri: lb://education-service
          predicates:
            - Path=/api/education/**
        - id: sante-service
          uri: lb://sante-service
          predicates:
            - Path=/api/sante/**
        - id: restauration-service
          uri: lb://restauration-service
          predicates:
            - Path=/api/restauration/**
        - id: commerce-service
          uri: lb://commerce-service
          predicates:
            - Path=/api/commerce/**
        - id: construction-service
          uri: lb://construction-service
          predicates:
            - Path=/api/construction/**
        - id: ferme-service
          uri: lb://ferme-service
          predicates:
            - Path=/api/ferme/**
        - id: hotellerie-service
          uri: lb://hotellerie-service
          predicates:
            - Path=/api/hotellerie/**
        - id: logistique-service
          uri: lb://logistique-service
          predicates:
            - Path=/api/logistique/**
        - id: transport-service
          uri: lb://transport-service
          predicates:
            - Path=/api/transport/**
  config:
    import: optional:configserver:http://localhost:8888

app:
  security:
    jwt-secret: __SECRET__

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
    register-with-eureka: true
    fetch-registry: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
'@

$gatewayYaml = (Get-Content "$root\API-Gateway\src\main\resources\application.yml" -Raw).Replace('__SECRET__', $secret)
Write-File "$root\API-Gateway\src\main\resources\application.yml" $gatewayYaml

$services = @(
    @{
        ModuleFolder = 'API-Gestion-education'
        PackageName  = 'com.bizmaster.education'
        AppClass     = 'EducationApplication'
        AppName      = 'education-service'
        DbName       = 'education_db'
        Port         = 8081
        Title        = 'API Gestion Education'
        Metrics      = @(
            @{ code = 'students'; label = 'Eleves'; value = 1240; color = 'blue' },
            @{ code = 'classes'; label = 'Classes'; value = 42; color = 'emerald' },
            @{ code = 'bulletins'; label = 'Bulletins'; value = 980; color = 'amber' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-sante'
        PackageName  = 'com.bizmaster.sante'
        AppClass     = 'SanteApplication'
        AppName      = 'sante-service'
        DbName       = 'sante_db'
        Port         = 8082
        Title        = 'API Gestion Sante'
        Metrics      = @(
            @{ code = 'patients'; label = 'Patients'; value = 860; color = 'rose' },
            @{ code = 'consultations'; label = 'Consultations'; value = 540; color = 'cyan' },
            @{ code = 'ordonnances'; label = 'Ordonnances'; value = 320; color = 'violet' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-restauration'
        PackageName  = 'com.bizmaster.restauration'
        AppClass     = 'RestaurationApplication'
        AppName      = 'restauration-service'
        DbName       = 'restauration_db'
        Port         = 8083
        Title        = 'API Gestion Restauration'
        Metrics      = @(
            @{ code = 'reservations'; label = 'Reservations'; value = 220; color = 'orange' },
            @{ code = 'orders'; label = 'Commandes'; value = 430; color = 'indigo' },
            @{ code = 'tables'; label = 'Tables'; value = 64; color = 'emerald' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-commerce'
        PackageName  = 'com.bizmaster.commerce'
        AppClass     = 'CommerceApplication'
        AppName      = 'commerce-service'
        DbName       = 'commerce_db'
        Port         = 8084
        Title        = 'API Gestion Commerce'
        Metrics      = @(
            @{ code = 'products'; label = 'Produits'; value = 560; color = 'sky' },
            @{ code = 'sales'; label = 'Ventes'; value = 780; color = 'emerald' },
            @{ code = 'invoices'; label = 'Factures'; value = 410; color = 'amber' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-construction'
        PackageName  = 'com.bizmaster.construction'
        AppClass     = 'ConstructionApplication'
        AppName      = 'construction-service'
        DbName       = 'construction_db'
        Port         = 8085
        Title        = 'API Gestion Construction'
        Metrics      = @(
            @{ code = 'projects'; label = 'Projets'; value = 36; color = 'slate' },
            @{ code = 'materials'; label = 'Materiaux'; value = 980; color = 'stone' },
            @{ code = 'workers'; label = 'Ouvriers'; value = 124; color = 'orange' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-de-ferme'
        PackageName  = 'com.bizmaster.ferme'
        AppClass     = 'FermeApplication'
        AppName      = 'ferme-service'
        DbName       = 'ferme_db'
        Port         = 8086
        Title        = 'API Gestion Ferme'
        Metrics      = @(
            @{ code = 'cultures'; label = 'Cultures'; value = 28; color = 'green' },
            @{ code = 'livestock'; label = 'Elevage'; value = 74; color = 'amber' },
            @{ code = 'production'; label = 'Production'; value = 1850; color = 'cyan' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-hotellerie'
        PackageName  = 'com.bizmaster.hotellerie'
        AppClass     = 'HotellerieApplication'
        AppName      = 'hotellerie-service'
        DbName       = 'hotellerie_db'
        Port         = 8087
        Title        = 'API Gestion Hotellerie'
        Metrics      = @(
            @{ code = 'rooms'; label = 'Chambres'; value = 92; color = 'blue' },
            @{ code = 'bookings'; label = 'Reservations'; value = 310; color = 'violet' },
            @{ code = 'guests'; label = 'Clients'; value = 640; color = 'rose' }
        )
    },
    @{
        ModuleFolder = 'API-Gestion-logistique'
        PackageName  = 'com.bizmaster.logistique'
        AppClass     = 'LogistiqueApplication'
        AppName      = 'logistique-service'
        DbName       = 'logistique_db'
        Port         = 8088
        Title        = 'API Gestion Logistique'
        Metrics      = @(
            @{ code = 'deliveries'; label = 'Livraisons'; value = 275; color = 'indigo' },
            @{ code = 'vehicles'; label = 'Vehicules'; value = 48; color = 'slate' },
            @{ code = 'packages'; label = 'Colis'; value = 1880; color = 'emerald' }
        )
    },
    @{
        ModuleFolder = 'API-transport'
        PackageName  = 'com.bizmaster.transport'
        AppClass     = 'TransportApplication'
        AppName      = 'transport-service'
        DbName       = 'transport_db'
        Port         = 8089
        Title        = 'API Transport'
        Metrics      = @(
            @{ code = 'trips'; label = 'Trajets'; value = 450; color = 'cyan' },
            @{ code = 'buses'; label = 'Vehicules'; value = 36; color = 'orange' },
            @{ code = 'drivers'; label = 'Chauffeurs'; value = 58; color = 'emerald' }
        )
    }
)

foreach ($service in $services) {
    New-StandardService `
        -ModuleFolder $service['ModuleFolder'] `
        -PackageName $service['PackageName'] `
        -AppClass $service['AppClass'] `
        -AppName $service['AppName'] `
        -DbName $service['DbName'] `
        -Port $service['Port'] `
        -Title $service['Title'] `
        -Metrics $service['Metrics']
}

# Auth service
New-AuthService

Write-Host 'Core microservice infrastructure created.'
