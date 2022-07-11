package net.ninjadev.bms.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Entity
@Table(name = "transactions")
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private double amount;

    private String description;

    @NotNull
    @ManyToOne
    private Category category;

    @NotNull
    private Date date;

    @NotNull
    @ManyToOne
    private User user;
}
