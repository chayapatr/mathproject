#include <emscripten.h>

int EMSCRIPTEN_KEEPALIVE prime(long int n) {
    if (n % 2 == 0) return 0;
	long int max = ((n - 1)/2);
	for (long int i = 2; i < max; i++) {
		if (n % ((2 * i) + 1) == 0) return 0;
	}
	return 1;
}