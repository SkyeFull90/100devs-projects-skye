import unittest
from unittest.mock import patch

from headsTails import main


class TestCoinFlip(unittest.TestCase):
    @patch('builtins.input', return_value='10')  # Mock user input to be '10'
    def test_main(self, mock_input):
        with patch('classWork.python.headsTails.headtails', side_effect=[0, 1, 0, 0, 1, 1, 0, 1, 0, 1]):
            main()
            # Add your assertions here


if __name__ == '__main__':
    unittest.main()