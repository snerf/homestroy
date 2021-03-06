$(function(){
    $(".lmenu a").die().live("click", function(){
        $.ajax({url: "/interface.php",
                type: "GET",
                data: {type: "dataact",
                        val: $(this).attr("id")
                },
                beforeSend:function(){
                  $("#loader").show().height(getPageSize()[1]);
                },
                success:function(data){
                        $(".main-block").html(data);
                        $("#loader").hide();
                }
        });
        return false;
    });
    
    $("#abt-photo-chck").die().live("click", function(){
        var a = $(this), chck = a.attr("checked");
        
        if(chck == "checked" || chck == true)
        {
            $("#abt-photo-inp").removeClass("hide").addClass("inl-bl");
        }
        else
        {
            $("#abt-photo-inp").removeClass("inl-bl").addClass("hide");
        }
    });
    
    $("#det-submit").die().live("click", function(){
        params = new Object();
        $("#det-fieldset input[type=text]").each(function(){
            var a = $(this), nm = a.attr("name");
            params[nm] = new Object();
            params[nm]["value"] = a.val();
            params[nm]["name"] = nm;
            params[nm]["status"] = $("#status-" + nm).val();
        });
        
        $.ajax({url: "/DetailsController.php",
                type: "GET",
                data: {
                    param: params
                },
                beforeSend:function(){
                  $("#loader").show().height(getPageSize()[1]);  
                },
                success:function(data){
                    $("#loader").hide();
                    $.fancybox(data);
                }
        });
        
        return false;
    });
    
    $("#cont-submit").die().live("click", function(){
        params = new Object();
        $("#cont-fieldset input[name]").each(function(){
            var a = $(this), nm = a.attr("name");
            params[nm] = new Object();
            params[nm]["value"] = a.val();
            params[nm]["id"] = nm;
            params[nm]["position"] = $("#position_" + nm).val();
            params[nm]["default"] = $("#default_" + nm ).val();
            params[nm]["status"]  = $("#status-" + nm).val();
        });
        
        $.ajax({url: "/ContactsController.php",
                type: "GET",
                data: {
                    param: params
                },
                beforeSend:function(){
                  $("#loader").show().height(getPageSize()[1]);  
                },
                success:function(data){
                    $("#loader").hide();
                    $.fancybox(data);
                }
        });
        
        return false;
    });
    
    $("#cont-fieldset input[type=radio]").die().live("click", function(){
        $("#cont-fieldset input[type=radio]").val("0");
        $(this).val("1");
    });
    
    $("#edit-goods").die().live("click", function(){
        var a = $("#edit-goods-area");
        
        if(a.hasClass("close")){
            a.removeClass("close");
        }
        else{
            a.addClass("close");
        }
        
        return false;
    });
    
    $("#edit-about").die().live("click", function(){
        var a = $("#edit-about-area");
        
        if(a.hasClass("close")){
            a.removeClass("close");
        }
        else{
            a.addClass("close");
        }
        
        return false;
    });
    
    $("#edit-catalog").die().live("click", function(){
        var a = $("#edit-catalog-area");
        
        if(a.hasClass("close")){
            a.removeClass("close");
        }
        else{
            a.addClass("close");
        }
        
        return false;
    });
    
    $("#edit-goods-area a[rel]").die().live("click", function(){
        var a = $(this), id = a.attr("rel");
        $("#good-id").val(id);
        $("#sel-catalog").val($("#hddn-gds-edt-catid_"+id).val());
        $("#name").val($("#hddn-gds-edt-name_"+id).val());
        $("#short").val($("#hddn-gds-edt-short_"+id).val());
        $("#price").val($("#hddn-gds-edt-price_"+id).val());
        $("#size").val($("#hddn-gds-edt-size_"+id).val());
        $("#url").val($("#hddn-gds-edt-url_"+id).val());
        $("#status").val($("#hddn-gds-edt-status_"+id).val());
        
        return false;
    });
    
    $("#edit-about-area a[rel]").die().live("click", function(){
        var a = $(this), id = a.attr("rel");
        $("#about_id").val(id);
        $("#title").val($("#hddn-abt-edt-title_"+id).val());
        $("#text").val($("#hddn-abt-edt-text_"+id).val());
        $("#img_style").val($("#hddn-abt-edt-img-style_"+id).val());
        $("#position").val($("#hddn-abt-edt-position_"+id).val());
        $("#status").val($("#hddn-abt-edt-status_"+id).val());
        
        return false;
    });
    
    $("#goods-fieldset input[type=submit],#aboutsubmit,#catalogsubmit,#deliverysubmit,#counter-fieldset-submit").die().live("click", function(){
        $("#loader").show().height(getPageSize()[1]);
    });
    
    $("#edit-catalog-area a[edit]").die().live("click", function(){
        var a = $(this), id = a.attr("edit");
        $("#catalog-id").val(id);
        $("#toplvl-cat-id").val($("#hddn-cat-edt-toplvl-cat-id_"+id).val());
        $("#toplvl").val($("#hddn-cat-edt-parent_"+id).val().length > 0 ? $("#hddn-cat-edt-parent_"+id).val() : "Верхний уровень");
        $("#name").val($("#hddn-cat-edt-name_"+id).val());
        $("#url").val($("#hddn-cat-edt-url_"+id).val());
        $("#description").val($("#hddn-cat-edt-descr_"+id).val());
        $("#position").val($("#hddn-cat-edt-pos_"+id).val());
        $("#status").val($("#hddn-abt-edt-status_"+id).val());
        
        return false;
    });
    
    $("#edit-catalog-area a[add]").die().live("click", function(){
        var a = $(this), id = a.attr("add");
        $("#toplvl-cat-id").val($("#hddn-cat-edt-toplvl-cat-id_"+id).val());
        $("#toplvl").val($("#hddn-cat-edt-name_"+id).val().length > 0 ? $("#hddn-cat-edt-name_"+id).val() : "Верхний уровень");
        
        return false;
    });
    
   $("#edit-catalog-area a[block]").die().live("click", function(){
       var a = $(this), id = a.attr("block");
       if(confirm("Вы уверены что хотите заблокировать данный каталог?"))
       {
            $.ajax({url: "/CatalogController.php",
                     type: "GET",
                     data: {
                         action:"block",
                         "id"  :id
                     },
                     beforeSend:function(){
                       $("#loader").show().height(getPageSize()[1]);  
                     },
                     success:function(data){
                         $("#loader").hide();
                         $.fancybox(data);
                     }
             });
       }
        
        return false;
   });
    
    $("#edit-catalog-area a[del]").die().live("click", function(){
       var a = $(this), id = a.attr("del");
       
        if(confirm("Вы уверены что хотите удалить данный каталог?"))
       {
            $.ajax({url: "/CatalogController.php",
                type: "GET",
                data: {
                    action:"delete",
                    "id"  :id
                },
                beforeSend:function(){
                  $("#loader").show().height(getPageSize()[1]);  
                },
                success:function(data){
                    $("#loader").hide();
                    $.fancybox(data);
                }
            });
       }
        
        return false;
   });
   
   $("#edit-catalog-area a[act]").die().live("click", function(){
       var a = $(this), id = a.attr("act");
       
        if(confirm("Вы уверены что хотите удалить данный каталог?"))
       {
            $.ajax({url: "/CatalogController.php",
                type: "GET",
                data: {
                    action:"activate",
                    "id"  :id
                },
                beforeSend:function(){
                  $("#loader").show().height(getPageSize()[1]);  
                },
                success:function(data){
                    $("#loader").hide();
                    $.fancybox(data);
                }
            });
       }
        
        return false;
   });
   
    $("#robots-fieldset-submit").die().live("click", function(){
        
        $.ajax({url: "/RobotsController.php",
                type: "GET",
                data: {
                    text:$("#robots-fieldset textarea").val()
                },
                beforeSend:function(){
                  $("#loader").show().height(getPageSize()[1]);  
                },
                success:function(data){
                    $("#loader").hide();
                    $.fancybox(data);
                }
        });
        
        return false;
    });

    $("#seo-fieldset a[rel], #seo-fieldset li[rel]").die().live("click", function(){
        var a     = $(this),
            name  = a.attr("rel"),
            key   = $("#hddn-seo-key-" + name).val(),
            descr = $("#hddn-seo-descr-" + name).val(),
            title = $("#hddn-seo-ttl-" + name).val();

        if(key == undefined)
        {
            key = "";
        }

        if(descr == undefined)
        {
            descr = "";
        }

        if(title == undefined)
        {
            title = "";
        }

        $("#seo-fieldset-hidden").val(name.split("**").join("/"));
        $("#page").val(a.text());
        $("#keywords").val((key.length > 0 ? key : ""));
        $("#description").val((descr.length > 0 ? descr : ""));
        $("#title").val((title.length > 0 ? title : ""));

        return false;
    });

    $("#seo-fieldset-submit").die().live("click", function(){

        $.ajax({url: "/SEOController.php",
            type: "GET",
            data: {
                name:$("#seo-fieldset-hidden").val(),
                key:$("#keywords").val(),
                descr:$("#description").val(),
                ttl: $("#title").val()
            },
            beforeSend:function(){
                $("#loader").show().height(getPageSize()[1]);
            },
            success:function(data){
                $("#loader").hide();
                $.fancybox(data);
            }
        });

        return false;
    });
});

function ShowResponse(text){
    $("#loader").hide();
    $.fancybox(text);
}