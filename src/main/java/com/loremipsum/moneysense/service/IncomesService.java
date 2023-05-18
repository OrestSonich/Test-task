package com.loremipsum.moneysense.service;

import com.loremipsum.moneysense.entity.IncomeEntity;
import com.loremipsum.moneysense.entity.UserEntity;
import com.loremipsum.moneysense.pojo.IncomesModel;
import com.loremipsum.moneysense.repository.IncomesRepository;
import com.loremipsum.moneysense.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncomesService {
    @Autowired
    IncomesRepository incomesRepository;

    @Autowired
    UserRepository userRepository;
    public IncomesModel addIncomes(IncomeEntity entity, Long userId){
        UserEntity user = userRepository.findById(userId).orElseThrow();
        entity.setOwner(user);
        return IncomesModel.toModel(incomesRepository.save(entity));
    }

    public void deleteIncomes(Long id) {

        incomesRepository.deleteById(id);
    }
}
