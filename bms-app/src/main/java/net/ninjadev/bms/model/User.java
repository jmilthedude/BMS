package net.ninjadev.bms.model;

import lombok.*;
import net.ninjadev.bms.controller.TransactionController;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String firstName;

    private String lastName;

    private String emailId;

    @OneToMany
    private Set<Transaction> transactions;


}
