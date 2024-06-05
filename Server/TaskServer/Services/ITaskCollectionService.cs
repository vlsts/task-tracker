using TaskServer.Models;

namespace TaskServer.Services;

public interface ITaskCollectionService : ICollectionService<TaskModel>
{
    Task<List<TaskModel>> GetTasksByStatus(string status);
}