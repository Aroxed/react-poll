import { atom } from 'recoil';

export const pollState = atom({
  key: 'pollState',
  default: {
    question: "What's your favorite programming language?",
    options: [
      { id: 1, text: 'JavaScript', votes: 0 },
      { id: 2, text: 'Python', votes: 0 },
      { id: 3, text: 'Java', votes: 0 },
      { id: 4, text: 'C++', votes: 0 },
    ]
  }
}); 