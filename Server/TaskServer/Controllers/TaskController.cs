using Microsoft.AspNetCore.Mvc;
using TaskServer.Models;
using TaskServer.Services;

namespace TaskServer;

[ApiController]
[Route("[controller]")]
public class TaskController: ControllerBase
{
    public TaskController(ITaskCollectionService taskCollectionService)
    {
        _taskCollectionService= taskCollectionService?? throw new ArgumentNullException(nameof(TaskCollectionService));
    }

    [HttpGet]
    public async Task<IActionResult> GetTasks()
    {
        List<TaskModel> tasks = await _taskCollectionService.GetAll();
        return Ok(tasks );
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateTask([FromBody] TaskModel task)
    {
        if(task == null)
        {
            return BadRequest("Task cannot be null");
        }

        task.Id = Guid.NewGuid();
        await _taskCollectionService.Create(task);

        return Ok(task);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask([FromRoute] Guid id, [FromBody] TaskModel task)
    {
        if(task == null)
        {
            return BadRequest("Task cannot be null");
        }

        var existingTask = await _taskCollectionService.Get(id);
        if(existingTask == null)
        {
            return NotFound("Task not found");
        }

        // Make sure the id isn't updated
        task.Id = id;

        // Update the task
        await _taskCollectionService.Update(id, task);

        return Ok(task); // Return the updated task
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask([FromRoute] Guid id)
    {
        var existingTask = await _taskCollectionService.Get(id);
        if(existingTask == null)
        {
            return NotFound("Task not found");
        }

        await _taskCollectionService.Delete(id);

        return NoContent(); // Return a 204 status code
    }
    
    ITaskCollectionService _taskCollectionService;

}