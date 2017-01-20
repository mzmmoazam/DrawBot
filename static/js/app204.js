function iwillnameitlater(shape) {
  shape=shape.toLowerCase();
  if (shape=='rect' ||shape=='rectangle')
  {
    return {'x':340,'y':165,'up':0,'down':100,'left':0,'right':200};
  }
  else if (shape=='square')
  {
    return {'x':340,'y':165,'up':0,'down':100,'left':0,'right':100};
  }
  else if (shape=='circle')
  {
    return {'x':360,'y':240,'up':50,'down':50,'left':50,'right':50};
  }
  else if (shape=='rhombus')
  {
    return {'x':360,'y':165,'up':0,'down':100,'left':0,'right':150};
  }
  else if (shape=='hexagon')
  {
    return {'x':360,'y':163,'up':0,'down':150,'left':50,'right':50};
  }
  else if (shape=='cube')
  {
    return {'x':340,'y':165,'up':0,'down':100,'left':0,'right':100};
  }
  else if (shape=='triangle')
  {
    return {'x':360,'y':195,'up':0,'down':90,'left':50,'right':50};
  }
  else {
    return "blala";
  }

}

// get coordinates of a point on canvas by clicking [close after development complete]
document.addEventListener("DOMContentLoaded", init, false);

      function init()
      {
        var canvas = document.getElementById("mycanvas");
        canvas.addEventListener("mousedown", getPosition, false);
      }

      function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("mycanvas");

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }

        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;

        console.log("x: " + x + "  y: " + y);
      }

function clearscreen() {
    var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');
  ctx.lineCap = 'butt';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function build(data,direction='',distance=0,padding=0) {
  try{
  data=data.toLowerCase();
  if(direction)
  var temp_dir=direction,temp_dis=distance,temp_padding=padding;
  else {
    var temp_dir=false,temp_dis=0,temp_padding=0;
  }
  var canvas = document.getElementById('mycanvas');
  // console.log(temp_dir+" "+temp_dis);
 if (canvas.getContext)
 {
   // alert("canvas dimensions"+canvas.width+"mm"+canvas.height);
   var ctx = canvas.getContext('2d');
  // console.log(temp_dir,temp_dis);

   if (data=='rectangle' || data=='rect')
     rect(temp_padding,temp_dir,temp_dis,true,ctx);


 else if (data=='square')
 rect(temp_padding,temp_dir,temp_dis,false,ctx);


 else if (data=='rhombus')
 rhombus(temp_padding,temp_dir,temp_dis,ctx);


   else if(data=='triangle')
     triangle(temp_padding,temp_dir,temp_dis,ctx);

 else if (data=='circle')
   circle(temp_padding,temp_dir,temp_dis,ctx);

 else if (data=='hexagon')
   hexagon(temp_padding,temp_dir,temp_dis,ctx);

   else if (data =='cube')
   cube(temp_padding,temp_dir,temp_dis,ctx);

   else if (data =='cuboid')
   cube(temp_padding,temp_dir,temp_dis,ctx,false);

   else
     alert("This shape is not included yet."+data);

 }
 }catch(e){alert("This combination is not included yet and will be taken in consideration.");}
}

function shadeColor(color, percent) {
  color = color.substr(1);
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function cube(padding=0,direction=0,distance='',ctx,cube=true,x=400, y=300, wx=100, wy=100, h=100, color='#1551f3') {
  if (!cube)
  {
  var x=380,y=350, wx=100, wy=200, h=100, color='#1551f3',a=100,b=200;
  }
  else {
    {var a=200,b=250;}
  }
  if(direction)
  {
    console.log(direction,distance);
    if(direction=='right')
    x+=padding+distance+a;
    else if(direction=='left')
    x-=Math.abs(-distance+padding-100);
    else if (direction=='up')
    y-=Math.abs(-distance+padding-c);//x===y
    else {y+=padding+distance;}
  }
    console.log(x+' '+y);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    console.log(color,shadeColor(color,-10));
    ctx.fillStyle = shadeColor(color, -10);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 10);
    ctx.strokeStyle = shadeColor(color, 50);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    ctx.fill();
    //change color to default
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
  }

function rect(data=0,direction=0,distance='',rect=true,ctx,x=340,y=165,width=100,height=100) {
  if(rect){x=340,y=165,width=100,height=200}
  if(direction)
  {
    if(direction=='right'){
        x=data.x+distance+data.right;}

    else if(direction=='left'){
      if(rect){
        x=data.x-distance-data.left-200;}
        else
        {x=data.x-distance-data.left-100;}
      }
    else if (direction=='up'){
    console.log(data.y+' '+distance+' '+data.down);
      y=data.y-distance-data.up-100;}
    else {
      y=data.y+distance+data.up+100;
    }
  }
  console.log(x+' '+y);
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y+width);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x,y+width);
  ctx.lineTo(x+height,y+width);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+height,y+width);
  ctx.lineTo(x+height,y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+height,y);
  ctx.lineTo(x,y);
  ctx.stroke();
}

function rhombus(data=0,direction=0,distance='',ctx,x=360,y=165,height=100,width=100,deviation=-50) {
  if(direction)
  {
    if(direction=='right')
    x=data.x+distance+data.right+50;
    else if(direction=='left'){
      console.log();
  x=data.x-distance-data.left-100;
  }
    else if (direction=='up'){
      y=data.y-distance-data.up-100;
      }
    else {y=data.y+distance+data.down;}
  }
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+deviation,y+height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+deviation,y+height);
  ctx.lineTo(x+deviation+width,y+height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+deviation+width,y+height);
  ctx.lineTo(x+width,y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+width,y);
  ctx.lineTo(x,y);
  ctx.stroke();

}

function triangle(data=0,direction=0,distance='',ctx,x1=360,y1=195) {

  if(direction)
  {
    console.log(direction,distance);
    if(direction=='right')
  {
    x1=distance+data.right+data.x+50;

  }
    else if(direction=='left')
    {
      x1=data.x-distance-data.left-50;
    }
    else if (direction=='up')
    {
      y1=data.y-distance-data.up-90;
    }
    else
    {
      y1=distance+data.down+data.y;
    }
  }
  // x2=310,y2=285,x3=410,y3=285
  var x2=x1-50,x3=x1+50,y2=y1+90,y3=y1+90;
  console.log(x1+' '+y1+' '+x2+' '+y2+' '+x3+' '+y3);
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2,y2);
  ctx.lineTo(x3,y3);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3,y3);
  ctx.lineTo(x1,y1);
  ctx.stroke();

}

function circle(data=0,direction=0,distance='',ctx,x=360,y=240,radius=50) {
  if(direction)
  {
    console.log(direction,distance);
    if(direction=='right')
    x=data.x+50+distance+data.right;
    else if(direction=='left')
    x=data.x-50-distance-data.left;
    else if (direction=='up')
    y=data.y-50-distance-data.up;
    else {y=data.y+50+distance+data.down;}
  }
  console.log(x+' '+y);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.stroke();
}

function hexagon(data=0,direction=0,distance='',ctx,x=360,y=163) {
  if(direction)
  {
    console.log(direction,distance);
    if(direction=='right')
    x=data.x+data.right+distance+50;
    else if(direction=='left')
    x=data.x-data.left-distance-50;
    else if (direction=='up')
    y=data.y-data.up-distance-150;
    else {y=data.y+data.down+distance;}
  }
  console.log(x+' '+y);
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+50,y+50);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+50,y+50);
  ctx.lineTo(x+50,y+100);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+50,y+100);
  ctx.lineTo(x,y+150);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x,y+150);
  ctx.lineTo(x-50,y+100);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x-50,y+100);
  ctx.lineTo(x-50,y+50);
  ctx.stroke();
  ctx.moveTo(x-50,y+50);
  ctx.lineTo(x,y);
  ctx.stroke();

}

$(document).ready(function() {$('#smtbtn').click(function() {
  clearscreen();
var x=$('#usrmsg').val();
//  console.log(x);
$('#inserthere').append( "<div class=\"row\"><div class=\"col-lg-12\"><div class=\"media\"><div class=\"media-body\"><h4 class=\"media-heading\">User</h4><p>"+x+"</p></div></div></div></div>");
// console.log("fnief");
$('#usrmsg').val('');

  $.get( "/usrmsg/"+x,function(daata){

    var data=$.parseJSON(daata);
    if(!data.two_figures)
    build(data.action);
    else {

      build(data.first);
      console.log(data);

      console.log(data.direction);
      build(data.second,data.direction,data.by,iwillnameitlater(data.first));
      // rect('up',10,false,ctx);
    }

if (data.message)
  $('#inserthere').append( "<hr><div class=\"row\"><div class=\"col-lg-12\"><div class=\"media\"><div class=\"media-body\"><h4 class=\"media-heading\">Bot</h4><p>"+data.message+"</p></div></div></div></div><hr>");

});

  });

  });
