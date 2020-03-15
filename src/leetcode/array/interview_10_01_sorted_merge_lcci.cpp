#include <vector>
using namespace std;

class Solution {
  public:void merge (vector<int>& A, int m, vector<int>& B, int n) {
    while (m > 0 && n > 0) {
      A[m + n] = A[m - 1] > B[n - 1] ?  A[m-- - 1] : B[n-- - 1];
    }
    while (n > 0) {
      A[n - 1] = B[n - 1];
      n--;
    }
   }
};
