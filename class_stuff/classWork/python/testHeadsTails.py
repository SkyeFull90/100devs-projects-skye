import unittest
from classWork.python.headsTails import headtails


class MyTestCase(unittest.TestCase):
    def test_headtails(self):
        result = headtails()
        self.assertIn(result, [0, 1])  # add assertion here


if __name__ == '__main__':
    unittest.main()
