package com.loremipsum.moneysense.service;

import com.loremipsum.moneysense.entity.IncomeEntity;
import com.loremipsum.moneysense.entity.UserEntity;
import com.loremipsum.moneysense.pojo.IncomesModel;
import com.loremipsum.moneysense.repository.IncomesRepository;
import com.loremipsum.moneysense.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;

@Service
public class IncomesService {
    @Autowired
    IncomesRepository incomesRepository;

    @Autowired
    UserRepository userRepository;
    public IncomesModel addIncomes(IncomeEntity entity, Long userId){
        entity.setDate(Date.valueOf(LocalDate.now()));
        UserEntity user = userRepository.findById(userId).orElseThrow();
        entity.setOwner(user);
        return IncomesModel.toModel(incomesRepository.save(entity));
    }

    public void deleteIncomes(Long id) {

        incomesRepository.deleteById(id);
    }

    public IncomesModel updateIncomes(IncomeEntity entity, Long id) {
        IncomeEntity income = incomesRepository.findById(id)
                .orElseThrow(() ->new UsernameNotFoundException("income not found"));
        income.setValue(entity.getValue());
        income.setUpdatedAt(Date.valueOf(LocalDate.now()));
        incomesRepository.save(income);
        return IncomesModel.toModel(entity);
    }
}
