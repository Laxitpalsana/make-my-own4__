AFRAME.registerComponent("fruit", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fruit${i}`;
  
        //position variables   
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createfruits(id, position);
      }
    } ,
  
    createfruits: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var bombEl = document.createElement("a-entity");
  
      bombEl.setAttribute("id",id);
      bombEl.setAttribute("position",position);
      
      bombEl.setAttribute("gltf-model", "./assests/bomb.glb");
      
  
      terrainEl.appendChild(bombEl);
    }
  });
  