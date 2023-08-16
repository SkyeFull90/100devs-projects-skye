const ageChecker = require('../ageChecker');
const readline = require('readline');

jest.mock('readline', () =>({
    createInterface: jest.fn(()=>({
        question: jest.fn(),
        close: jest.fn()
    }))
})); // Mock the readline module

describe('Age Checker', () => {
  let mockInterface;
  
  beforeEach(() => {
    mockInterface = {
      question: jest.fn(),
      close: jest.fn()
    };
    readline.createInterface.mockReturnValue(mockInterface);
  });

  test('Age less than 16 should log appropriate messages', async () => {
    mockInterface.question.mockImplementationOnce((question, callback) => {
      callback('15'); // Simulate user input
    });

    ageChecker()

    await new Promise(resolve => setTimeout(resolve, 10)); 
   
  });

  test('Age between 16 and 17 should log appropriate messages', async () => {
    // Similar approach to the above test, provide input 16 or 17
    mockInterface.question.mockImplementationOnce((question, callback) => {
        callback('16'); // Simulate user input
      });
  
    
  });

  // Continue adding tests for different age ranges
});
