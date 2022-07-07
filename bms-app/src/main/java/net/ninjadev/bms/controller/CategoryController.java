package net.ninjadev.bms.controller;

import net.ninjadev.bms.exception.ResourceNotFoundException;
import net.ninjadev.bms.model.Category;
import net.ninjadev.bms.model.User;
import net.ninjadev.bms.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CategoryController extends BaseController {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Category> getCategory(@PathVariable long id) {
        Category category = getCategoryById(id);
        return ResponseEntity.ok(category);
    }

    @PutMapping("/category/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable long id, @RequestBody Category categoryDetails) {
        Category category = getCategoryById(id);
        category.setName(categoryDetails.getName());
        return ResponseEntity.ok(categoryRepository.save(category));
    }

    @PostMapping("/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryRepository.save(category));
    }

    @PostMapping("/category/{id}")
    public ResponseEntity<Category> removeCategory(@PathVariable long id) {
        Category category = getCategoryById(id);
        categoryRepository.delete(category);
        return ResponseEntity.ok(category);
    }

    private Category getCategoryById(long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No category found by that ID: " + id));
    }

}
