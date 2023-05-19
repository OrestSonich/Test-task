package com.loremipsum.moneysense.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class CreditEntity {
    @Id
    private Long id;
    private double receivedCash;
    private double refundCash;
    private Date openAt;
    private Date closed;
    private double rate;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity owner;
}
