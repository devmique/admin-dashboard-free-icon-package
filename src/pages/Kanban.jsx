import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { kanbanData } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  const [tasks, setTasks] = useState(kanbanData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <div className="flex gap-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="kanban">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="w-full bg-gray-100 p-4 rounded-lg">
                {tasks.map((task, index) => (
                  <Draggable key={task.Id} draggableId={task.Id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-4 rounded-md shadow-md mb-2"
                      >
                        <h3 className="font-bold">{task.Summary}</h3>
                        <p className="text-gray-500">{task.Status}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
