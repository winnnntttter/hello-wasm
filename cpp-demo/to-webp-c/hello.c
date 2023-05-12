#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}

// emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' -I libwebp hello.c libwebp\src\{dec,dsp,demux,enc,mux,utils}\*.c

// emcc -O1 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' -s ALLOW_MEMORY_GROWTH=1 -I libwebp hello.c libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c

    // emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' -I libwebp hello.c libwebp/src/dec/*.c

// emcc -o hello3.html -I libwebp hello.c -O3 -s WASM=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']" --shell-file template.html