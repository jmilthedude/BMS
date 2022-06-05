package net.ninjadev.bms.controller;

import net.ninjadev.bms.model.User;
import net.ninjadev.bms.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping()
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
