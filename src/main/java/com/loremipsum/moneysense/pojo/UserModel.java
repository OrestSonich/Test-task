package com.loremipsum.moneysense.pojo;

import com.loremipsum.moneysense.entity.UserEntity;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class UserModel {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private List<IncomesModel> incomes;

    public static UserModel toModel(UserEntity entity){
        UserModel model = new UserModel();
        model.setId(entity.getId());
        model.setFirstName(entity.getFirstName());
        model.setLastName(entity.getLastName());
        model.setEmail(entity.getEmail());
        model.setIncomes(entity.getIncomes().stream().map(IncomesModel::toModel).collect(Collectors.toList()));
        return model;
    }
}
