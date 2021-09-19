function main(){
    /**
      * @type {HTMLCanvasElement} canvas
      */
     const canvas = document.getElementById('myCanvas');
   
     /**
      * @type {WebGLRenderingContext} gl
      */
     const gl = canvas.getContext('webgl');
   
     //mendefinisikan posisi
     var vertices = [
         -0.5,0.5,//Titik A
         -0.5,-0.5,//Titik B
         0.5,0.5,//Titik C
     ];
   
     //gambar vertex
     var positionBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
     gl.bindBuffer(gl.ARRAY_BUFFER,null);
   
     var vertexShaderCode = document.getElementById("vertexShaderCode").text;
   
     var vertexShader = gl.createShader(gl.VERTEX_SHADER);
     gl.shaderSource(vertexShader,vertexShaderCode);
     gl.compileShader(vertexShader);
   
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
   
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
   
    //membuat package program
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram,fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
   
    //menggambar
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram,"a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    
    //background
    gl.clearColor(0.8,0.5,1.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
   
    gl.drawArrays(gl.POINTS, 0, 3);
   
   }