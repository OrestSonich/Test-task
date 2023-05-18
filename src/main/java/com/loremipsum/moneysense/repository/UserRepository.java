package com.loremipsum.moneysense.repository;

import com.loremipsum.moneysense.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 *
 *  This class represent table USERS
 * @author Orest Sonich
 * @version 1.0
 *
 */

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}
