package net.ninjadev.bms.controller;

import net.ninjadev.bms.exception.ResourceNotFoundException;
import net.ninjadev.bms.model.Category;
import net.ninjadev.bms.model.Transaction;
import net.ninjadev.bms.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TransactionController extends BaseController {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionController(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @GetMapping("/transaction")
    public ResponseEntity<List<Transaction>> getCategories() {
        return ResponseEntity.ok(transactionRepository.findAll());
    }

    @GetMapping("/transaction/{id}")
    public ResponseEntity<Transaction> getTransaction(@PathVariable long id) {
        Transaction transaction = getTransactionById(id);
        return ResponseEntity.ok(transaction);
    }

    @PutMapping("/transaction/{id}")
    public ResponseEntity<Transaction> updateTransaction(@PathVariable long id, @RequestBody Transaction transactionDetails) {
        Transaction transaction = getTransactionById(id);
        transaction.setAmount(transactionDetails.getAmount());
        transaction.setCategory(transactionDetails.getCategory());
        transaction.setDate(transactionDetails.getDate());
        transaction.setDescription(transactionDetails.getDescription());
        transaction.setUser(transactionDetails.getUser());
        return ResponseEntity.ok(transactionRepository.save(transaction));
    }

    @PostMapping("/transaction")
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        return ResponseEntity.ok(transactionRepository.save(transaction));
    }

    @PostMapping("/transaction/{id}")
    public ResponseEntity<Transaction> removeTransaction(@PathVariable long id) {
        Transaction transaction = getTransactionById(id);
        transactionRepository.delete(transaction);
        return ResponseEntity.ok(transaction);
    }

    private Transaction getTransactionById(long id) {
        return transactionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No transaction found by that ID: " + id));
    }
}
