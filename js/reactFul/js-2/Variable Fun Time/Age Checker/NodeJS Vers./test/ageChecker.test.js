const ageChecker = require('./ageChecker');
const readline = require('readline');

jest.mock('readline'); // Mock the readline module

describe('Age Checker', () => {
  let mockInterface;
  let originalConsoleLog;

  beforeAll(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn(); // Mock console.log
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

  beforeEach(() => {
    mockInterface = {
      question: jest.fn(),
      close: jest.fn()
    };
    readline.createInterface.mockReturnValue(mockInterface);
  });

  test('Age greater than or equal to 16 should log "You can drive."', () => {
    mockInterface.question.mockImplementationOnce((question, callback) => {
      callback(18); // Simulate user input
    });

    ageChecker();

    expect(mockInterface.question).toHaveBeenCalledWith(
      'Please enter your age: ',
      expect.any(Function)
    );
    expect(console.log).toHaveBeenCalledWith('You can drive.');
    expect(mockInterface.close).toHaveBeenCalled();
  });

  test('Age less than 16 should log "You can\'t drive."', () => {
    mockInterface.question.mockImplementationOnce((question, callback) => {
      callback(14); // Simulate user input
    });

    ageChecker();

    expect(mockInterface.question).toHaveBeenCalledWith(
      'Please enter your age: ',
      expect.any(Function)
    );
    expect(console.log).toHaveBeenCalledWith("You can't drive.");
    expect(mockInterface.close).toHaveBeenCalled();
  });
});
