import { v4 } from 'uuid';

export const seedStore = [
  {
    id: v4(),
    description: 'You can now drag & drop the todo card!',
    is_completed: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: v4(),
    description: 'Now with improved state management!',
    is_completed: true,
    date: new Date().toLocaleDateString(),
  },
  {
    id: v4(),
    description: 'Still need to beat my high score.',
    is_completed: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: v4(),
    description: 'Move the dishes from the dishwasher.',
    is_completed: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: v4(),
    description: 'Buy milk.',
    is_completed: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: v4(),
    description: 'Walk the chicken.',
    is_completed: false,
    date: new Date().toLocaleDateString(),
  },
];
