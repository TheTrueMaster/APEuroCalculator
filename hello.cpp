#include <iostream>
using namespace std;

int fib(int x);

int main() {
	cout<<"Hello, World\n\n";
	int num = 5;
	int fibAns = fib(num);
	cout<<"The " << num << "th number of the fibonacci sequence is " << fibAns;
	return 0;
}

int fib(int x) {
	if (x == 0 || x == 1) {
		return x;
	}

	else {
		return (fib(x-1) + fib(x-2));
	}
}
