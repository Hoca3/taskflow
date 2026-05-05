package com.ammar.backend.controller;

import com.ammar.backend.model.Task;
import com.ammar.backend.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> getTasks() {
        return service.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return service.createTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }
}