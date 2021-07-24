import React, { useState } from "react";
import './Home.css';
import github from '../../images/github1.png';
import linkedin from '../../images/linkedin.png';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid';

const columnsMocked = {
  [uuid()]: {
    items: [{id: uuid(), content:'linkedin'}, {id: uuid(), content:'github'}]
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  },
  [uuid()]: {
    items: []
  }
  
}

const onDragEnd = (result,columns,setColumns) => {
  if(!result.destination) return;
  const { source, destination } = result;
  if(source.droppableId !== destination.droppableId){
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index,1);
    destItems.splice(destination.index, 0 , removed);
    setColumns({
      ...columns,
      [source.droppableId] : {
        items: sourceItems
      },
      [destination.droppableId]: {
        items: destItems
      }
    })
  } else{
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        items: copiedItems
      }
    })
  }
  
}

export default function Home (props) {
  const [columns, setColumns] = useState(columnsMocked);

  return (
    <div className='contExtHome'>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='star'>
          <span></span>
        </div>
        <div className='contExtColumns'>
        <div className='contExtDroppable'>
        <DragDropContext onDragEnd = {result => onDragEnd(result,columns,setColumns)}>
          {
            Object.entries(columns).map(([id, column]) => {
              return(
                <Droppable droppableId={id} key={id}>
                  {
                    (provided,snapshot) => {
                      return(
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='column'
                        >
                          {
                            column.items.map((item,index) => {
                              return(
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {
                                    (provided,snapshot) => {
                                      return(
                                        item.content === 'github' ?
                                        <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        onDoubleClick = {() => window.open("https://github.com/MFCaballero")}
                                        >
                                        <img
                                            style={{zIndex:1, margin:5, width: 100, height: 100, ...provided.dragHandleProps.style}} src={github} alt="" />
                                        </div> : <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        onDoubleClick = {() => window.open("https://www.linkedin.com/in/maria-florencia-caballero/")}
                                        >
                                          <img
                                            style={{zIndex:1, margin:5, width: 100, height: 100, ...provided.dragHandleProps.style}} src={linkedin} alt="" />
                                        </div>
                                      )
                                    }
                                  }
                                </Draggable>
                              )
                            })
                          }
                          {provided.placeholder}
                        </div>
                      )
                    }
                  }
                </Droppable>
              )
            })
          }
        </DragDropContext>
        </div>
        </div>
    </div>
  );
  
}