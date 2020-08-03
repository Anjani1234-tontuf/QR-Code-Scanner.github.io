$(document).ready(function () {
   
    var LJSON = new Array();
    
    $('#SGuardar').click(function(){
        
        if($('#NombreSlideshow').val()=== ''){
           alert('Ingrese el nombre del slideshow.');
            return 0 ;
           }
        
        if($('#TituloIMG').val()=== ''){
           alert('Ingrese el nombre de la imagen.');
             return 0 ;
            
           }
        
        if($('#UrlIMG').val()=== ''){
           alert('Ingrese la url de la imagen.');
             return 0 ;
            
           }
                         $('#NombreSlideshow').prop( "disabled", true );
        
                         var NE  =new Array();
                        var NSS = $('#NombreSlideshow').val();
        
                           NE ['Nombre_img']= $('#TituloIMG').val();
                           NE ['Url_img']= $('#UrlIMG').val();
                         LJSON.push(NE);
    //console.log(LJSON);
        cadenaHTML = '<div id="'+NSS+'" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators">';
        
        PartA = '';
        PartB = '</ol> <div class="carousel-inner"> ';
        PartC = '';
        PartD = '  </div> <!-- Left and right controls --> <a class="left carousel-control" href="#'+NSS+'" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#'+NSS+'" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a> </div>';
        $.each(LJSON, function(i,item){
            
            if(i == 0){
              PartA = PartA + '<li data-target="#'+NSS+'" data-slide-to="'+i+'" class="active"></li>';  
                 PartC = PartC + ' <div class="item active"> <img src="'+item.Url_img+'" alt="'+item.Nombre_img+'" style="width:100%;">  </div>';
            }else {
                PartA = PartA + '<li data-target="#'+NSS+'" data-slide-to="'+i+'" ></li>';  
                 PartC = PartC + ' <div class="item"> <img src="'+item.Url_img+'" alt="'+item.Nombre_img+'" style="width:100%;">  </div>';
            }

            
        });
        
        var HTML =cadenaHTML + PartA + PartB + PartC +PartD;
        
        
                         $('#TituloIMG').val('');
                         $('#UrlIMG').val('');
                         $('#CodigoHTML').val(HTML);
                         $('#PrevioMuestra').html(HTML);
                         });
    
});