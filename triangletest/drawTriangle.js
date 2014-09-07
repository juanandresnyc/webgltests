// http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/

// Setup gl context and bind games
var canvas = document.getElementById('triangleTestCanvas');
var gl = canvas.getContext('experimental-webgl');

var vertShaderScript = document.getElementById('2d-vertex-shader');
var fragShaderScript = document.getElementById('2d-fragment-shader');

var vertShaderSource = vertShaderScript.text;
var fragShaderSource = fragShaderScript.text;

var vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vertShaderSource);
gl.compileShader(vertShader);

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragShaderSource);
gl.compileShader(fragShader);

var program = gl.createProgram();

gl.attachShader(program, vertShader);
gl.attachShader(program, fragShader);

gl.linkProgram(program);
gl.useProgram(program);

// look up where the vertex data needs to go.
var positionLocation = gl.getAttribLocation(program, 'a_position');

var trianglePositionsArr = new Float32Array(
  [
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0
  ]
);
// Create a buffer and put a single clipspace rectangle in
// it (2 triangles)
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, trianglePositionsArr, gl.STATIC_DRAW);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

// draw
gl.drawArrays(gl.TRIANGLES, 0, 3);
